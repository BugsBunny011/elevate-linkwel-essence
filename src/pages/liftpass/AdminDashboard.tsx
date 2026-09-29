import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QrCode, LogOut, Building2, Wrench, Plus } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { NoIndex, Logomark, LiftPassShell } from "@/components/liftpass/LiftPassChrome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import {
  AMC_STATE_CLASS,
  AMC_STATE_LABEL,
  LIFT_STATUS_CLASS,
  LIFT_STATUS_LABEL,
  amcState,
  formatDate,
  worstAmc,
  worstStatus,
  type AmcState,
  type LiftStatus,
} from "@/lib/liftpass";

interface SiteRow {
  id: string;
  site_code: string;
  name: string;
  city: string | null;
  liftCount: number;
  amc: AmcState;
  status: LiftStatus;
  nextDue: string | null;
  flagged: number;
  expiringSoon: number;
}

const fetchOverview = async (): Promise<SiteRow[]> => {
  const [{ data: sites }, { data: lifts }, { data: contracts }, { data: visits }, { data: items }, { data: zones }] =
    await Promise.all([
      supabase.from("sites").select("*").order("name"),
      supabase.from("lifts").select("id, site_id, status"),
      supabase.from("amc_contracts").select("lift_id, end_date"),
      supabase.from("service_visits").select("lift_id, next_due_date"),
      supabase.from("audit_checklist_items").select("audit_zone_id, status"),
      supabase.from("audit_zones").select("id, lift_id"),
    ]);

  return (sites ?? []).map((site) => {
    const siteLifts = (lifts ?? []).filter((l) => l.site_id === site.id);
    const liftIds = siteLifts.map((l) => l.id);
    const amcStates = liftIds.map((id) =>
      amcState((contracts ?? []).find((c) => c.lift_id === id)?.end_date)
    );
    const dues = (visits ?? [])
      .filter((v) => liftIds.includes(v.lift_id) && v.next_due_date)
      .map((v) => v.next_due_date as string)
      .sort();
    const siteZoneIds = (zones ?? []).filter((z) => liftIds.includes(z.lift_id)).map((z) => z.id);
    const flagged = (items ?? []).filter(
      (i) => siteZoneIds.includes(i.audit_zone_id) && (i.status === "needs_attention" || i.status === "not_working")
    ).length;

    return {
      id: site.id,
      site_code: site.site_code,
      name: site.name,
      city: site.city,
      liftCount: siteLifts.length,
      amc: worstAmc(amcStates),
      status: worstStatus(siteLifts.map((l) => l.status)),
      nextDue: dues[0] ?? null,
      flagged,
      expiringSoon: amcStates.filter((s) => s === "expiring_soon").length,
    };
  });
};

const AdminDashboard = () => {
  const { data = [], isLoading } = useQuery({ queryKey: ["liftpass-admin-overview"], queryFn: fetchOverview });
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [city, setCity] = useState("all");
  const [amcFilter, setAmcFilter] = useState<"all" | AmcState>("all");
  const [search, setSearch] = useState("");
  const [addOpen, setAddOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [newSite, setNewSite] = useState({ name: "", site_code: "", address: "", city: "" });

  const addSite = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = newSite.name.trim();
    const site_code = newSite.site_code.trim().toUpperCase();
    if (!name || !site_code) return;
    if (!/^[A-Z0-9-]+$/.test(site_code)) {
      toast.error("Site code can contain only letters, numbers and hyphens.");
      return;
    }
    setSaving(true);
    const { data: site, error } = await supabase.from("sites").insert({
      name,
      site_code,
      address: newSite.address.trim() || null,
      city: newSite.city.trim() || null,
    }).select("id").single();
    setSaving(false);
    if (error) {
      toast.error(error.code === "23505" ? "That site code is already in use." : error.message);
      return;
    }
    setAddOpen(false);
    setNewSite({ name: "", site_code: "", address: "", city: "" });
    queryClient.invalidateQueries({ queryKey: ["liftpass-admin-overview"] });
    queryClient.invalidateQueries({ queryKey: ["liftpass-qr-sites"] });
    queryClient.invalidateQueries({ queryKey: ["tech-sites"] });
    toast.success("Site added");
    navigate(`/admin/sites/${site.id}`);
  };

  const cities = useMemo(() => Array.from(new Set(data.map((d) => d.city).filter(Boolean))) as string[], [data]);

  const rows = data.filter(
    (r) =>
      (city === "all" || r.city === city) &&
      (amcFilter === "all" || r.amc === amcFilter) &&
      (search === "" ||
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.site_code.toLowerCase().includes(search.toLowerCase()))
  );

  const totals = {
    sites: data.length,
    lifts: data.reduce((n, r) => n + r.liftCount, 0),
    expiring: data.reduce((n, r) => n + r.expiringSoon, 0),
    flagged: data.reduce((n, r) => n + r.flagged, 0),
  };

  return (
    <LiftPassShell>
      <NoIndex title="LiftPass admin" />
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-4">
          <div className="flex items-center gap-3">
            <Logomark />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">LiftPass</p>
              <h1 className="font-heading text-lg font-semibold">Admin dashboard</h1>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <Link to="/technician">
                <Wrench size={14} /> Technician
              </Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/admin/qr">
                <QrCode size={14} /> QR codes
              </Link>
            </Button>
            <Button variant="ghost" size="sm" onClick={() => supabase.auth.signOut()}>
              <LogOut size={14} />
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-6 px-4 py-6">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-heading text-xl font-semibold">Sites</h2>
          <Button onClick={() => setAddOpen(true)}>
            <Plus size={16} /> Add site
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            ["Total sites", totals.sites],
            ["Total lifts", totals.lifts],
            ["AMC expiring in 30 days", totals.expiring],
            ["Flagged audit items", totals.flagged],
          ].map(([label, value]) => (
            <div key={label as string} className="rounded-xl border border-border bg-card p-4">
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="font-heading text-2xl font-semibold">{value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Input
            placeholder="Search site name or code"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-xs"
          />
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="h-10 rounded-md border border-input bg-background px-3 text-sm"
          >
            <option value="all">All cities</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            value={amcFilter}
            onChange={(e) => setAmcFilter(e.target.value as AmcState | "all")}
            className="h-10 rounded-md border border-input bg-background px-3 text-sm"
          >
            <option value="all">Any AMC status</option>
            <option value="active">Active</option>
            <option value="expiring_soon">Expiring soon</option>
            <option value="expired">Expired</option>
            <option value="none">No contract</option>
          </select>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Site</th>
                <th className="px-4 py-3">City</th>
                <th className="px-4 py-3">Lifts</th>
                <th className="px-4 py-3">AMC</th>
                <th className="px-4 py-3">Health</th>
                <th className="px-4 py-3">Next service</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                  <td className="px-4 py-3">
                    <Link to={`/admin/sites/${r.id}`} className="font-medium text-primary underline-offset-2 hover:underline">
                      {r.name}
                    </Link>
                    <p className="text-xs text-muted-foreground">{r.site_code}</p>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{r.city ?? "-"}</td>
                  <td className="px-4 py-3">{r.liftCount}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full border px-2 py-1 text-xs ${AMC_STATE_CLASS[r.amc]}`}>
                      {AMC_STATE_LABEL[r.amc]}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full border px-2 py-1 text-xs ${LIFT_STATUS_CLASS[r.status]}`}>
                      {LIFT_STATUS_LABEL[r.status]}
                    </span>
                    {r.flagged > 0 && <span className="ml-2 text-xs text-amber-700">{r.flagged} flagged</span>}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{r.nextDue ? formatDate(r.nextDue) : "-"}</td>
                </tr>
              ))}
              {!isLoading && rows.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-sm text-muted-foreground">
                    <Building2 className="mx-auto mb-2" size={20} /> No sites match these filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
      <Dialog open={addOpen} onOpenChange={(open) => { if (!saving) setAddOpen(open); }}>
        <DialogContent className="max-w-md">
          <DialogHeader><DialogTitle>Add site</DialogTitle></DialogHeader>
          <form id="add-site-form" onSubmit={addSite} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="new-site-name">Site name</Label>
              <Input id="new-site-name" required maxLength={120} value={newSite.name} onChange={(e) => setNewSite({ ...newSite, name: e.target.value })} placeholder="e.g. Ashoka Residency" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="new-site-code">Site code</Label>
              <Input id="new-site-code" required maxLength={40} value={newSite.site_code} onChange={(e) => setNewSite({ ...newSite, site_code: e.target.value.toUpperCase() })} placeholder="e.g. ST-0013" aria-describedby="site-code-hint" />
              <p id="site-code-hint" className="text-xs text-muted-foreground">Used in the site's QR link. Letters, numbers and hyphens only.</p>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="new-site-address">Address</Label>
              <Input id="new-site-address" maxLength={250} value={newSite.address} onChange={(e) => setNewSite({ ...newSite, address: e.target.value })} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="new-site-city">City</Label>
              <Input id="new-site-city" maxLength={100} value={newSite.city} onChange={(e) => setNewSite({ ...newSite, city: e.target.value })} />
            </div>
          </form>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setAddOpen(false)} disabled={saving}>Cancel</Button>
            <Button type="submit" form="add-site-form" disabled={saving}>{saving ? "Adding…" : "Add site"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </LiftPassShell>
  );
};

export default AdminDashboard;
