import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, LogOut, Search } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { NoIndex, Logomark, LiftPassShell } from "@/components/liftpass/LiftPassChrome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CHECKLIST_STATUS_LABEL,
  SERVICE_CHECKLIST_ITEMS,
  ZONE_LABEL,
  ZONE_TEMPLATES,
  type ChecklistStatus,
  type Lift,
  type Site,
  type ZoneName,
} from "@/lib/liftpass";

const CHECK_STATUSES: ChecklistStatus[] = ["ok", "needs_attention", "not_working", "not_applicable"];

const TechnicianConsole = () => {
  const [search, setSearch] = useState("");
  const [site, setSite] = useState<Site | null>(null);
  const [lift, setLift] = useState<Lift | null>(null);
  const [tab, setTab] = useState<"visit" | "audit">("visit");

  const { data: sites = [] } = useQuery({
    queryKey: ["tech-sites"],
    queryFn: async () => {
      const { data } = await supabase.from("sites").select("*").order("name");
      return (data ?? []) as Site[];
    },
  });

  const { data: lifts = [] } = useQuery({
    queryKey: ["tech-lifts", site?.id],
    enabled: !!site,
    queryFn: async () => {
      const { data } = await supabase.from("lifts").select("*").eq("site_id", site!.id).order("lift_no");
      return (data ?? []) as Lift[];
    },
  });

  const matches = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return sites.slice(0, 8);
    return sites
      .filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.site_code.toLowerCase().includes(q) ||
          (s.address ?? "").toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [sites, search]);

  // Visit form state
  const [visit, setVisit] = useState({
    serial_no: "",
    visit_type: "amc",
    visit_date: new Date().toISOString().slice(0, 10),
    in_time: "",
    out_time: "",
    complaint_number: "",
    breakdown_notes: "",
    problem_reported: "",
    action_taken: "",
    customer_remarks: "",
    received_amount: "",
    engineer_name: "",
    engineer_mobile: "",
    next_due_date: "",
  });
  const [checks, setChecks] = useState<Record<string, boolean>>({});

  // Audit form state
  const [zone, setZone] = useState<ZoneName>("pit");
  const [auditedBy, setAuditedBy] = useState("");
  const [auditDate, setAuditDate] = useState(new Date().toISOString().slice(0, 10));
  const [voltages, setVoltages] = useState({ "L1-L2": "", "L1-L3": "", single_phase: "", "N-GND": "", control_dc: "" });
  const [flagged, setFlagged] = useState("");
  const [itemStatus, setItemStatus] = useState<Record<string, ChecklistStatus>>({});
  const [saving, setSaving] = useState(false);

  const template = ZONE_TEMPLATES[zone];

  const saveVisit = async () => {
    if (!lift) return;
    setSaving(true);
    const { error } = await supabase.from("service_visits").insert({
      lift_id: lift.id,
      serial_no: visit.serial_no || null,
      visit_type: visit.visit_type as "amc" | "guarantee" | "customer_call",
      visit_date: visit.visit_date,
      in_time: visit.in_time || null,
      out_time: visit.out_time || null,
      complaint_number: visit.complaint_number || null,
      checklist: checks,
      breakdown_notes: visit.breakdown_notes || null,
      problem_reported: visit.problem_reported || null,
      action_taken: visit.action_taken || null,
      customer_remarks: visit.customer_remarks || null,
      received_amount: visit.received_amount ? Number(visit.received_amount) : null,
      engineer_name: visit.engineer_name || null,
      engineer_mobile: visit.engineer_mobile || null,
      next_due_date: visit.next_due_date || null,
    });
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success("Service visit logged");
    setChecks({});
    setVisit({ ...visit, problem_reported: "", action_taken: "", customer_remarks: "", breakdown_notes: "" });
  };

  const saveAudit = async () => {
    if (!lift) return;
    setSaving(true);
    const { data: zoneRow, error } = await supabase
      .from("audit_zones")
      .insert({
        lift_id: lift.id,
        zone,
        audit_date: auditDate,
        audited_by: auditedBy || null,
        voltage_readings: Object.fromEntries(Object.entries(voltages).filter(([, v]) => v !== "")),
        flagged_issues: flagged
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
      })
      .select("id")
      .single();

    if (error || !zoneRow) {
      setSaving(false);
      return toast.error(error?.message ?? "Could not save audit");
    }

    if (template.length) {
      const rows = template.map((item_name) => ({
        audit_zone_id: zoneRow.id,
        item_name,
        status: itemStatus[item_name] ?? "ok",
      }));
      const { error: itemError } = await supabase.from("audit_checklist_items").insert(rows);
      if (itemError) {
        setSaving(false);
        return toast.error(itemError.message);
      }
    }
    setSaving(false);
    toast.success("Zone audit logged");
    setItemStatus({});
    setFlagged("");
  };

  return (
    <LiftPassShell>
      <NoIndex title="LiftPass technician" />
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-3 px-4 py-4">
          <div className="flex items-center gap-3">
            <Logomark />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">LiftPass</p>
              <h1 className="font-heading text-lg font-semibold">Technician</h1>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={() => supabase.auth.signOut()}>
            <LogOut size={16} />
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-2xl space-y-4 px-4 py-5 pb-16">
        {!site && (
          <>
            <div className="relative">
              <Search size={16} className="absolute left-3 top-3.5 text-muted-foreground" />
              <Input
                className="h-12 pl-9 text-base"
                placeholder="Search site name, address or code"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              {matches.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSite(s)}
                  className="w-full rounded-xl border border-border bg-card p-4 text-left"
                >
                  <p className="font-medium">{s.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {s.site_code} · {s.address ?? ""} {s.city ?? ""}
                  </p>
                </button>
              ))}
              {matches.length === 0 && <p className="text-sm text-muted-foreground">No sites match that search.</p>}
            </div>
          </>
        )}

        {site && !lift && (
          <>
            <button onClick={() => setSite(null)} className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <ArrowLeft size={14} /> Change site
            </button>
            <h2 className="font-heading text-xl font-semibold">{site.name}</h2>
            <div className="space-y-2">
              {lifts.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setLift(l)}
                  className="w-full rounded-xl border border-border bg-card p-4 text-left"
                >
                  <p className="font-medium">{l.lift_no}</p>
                  <p className="text-xs capitalize text-muted-foreground">{l.lift_type ?? "Lift"}</p>
                </button>
              ))}
              {lifts.length === 0 && <p className="text-sm text-muted-foreground">No lifts recorded at this site.</p>}
            </div>
          </>
        )}

        {site && lift && (
          <>
            <button onClick={() => setLift(null)} className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <ArrowLeft size={14} /> {site.name}
            </button>
            <h2 className="font-heading text-xl font-semibold">{lift.lift_no}</h2>

            <div className="grid grid-cols-2 gap-2 rounded-lg bg-muted p-1">
              {(["visit", "audit"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`rounded-md py-2.5 text-sm font-medium ${
                    tab === t ? "bg-card shadow-sm" : "text-muted-foreground"
                  }`}
                >
                  {t === "visit" ? "Log AMC visit" : "Log zone audit"}
                </button>
              ))}
            </div>

            {tab === "visit" ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs">Serial no</Label>
                    <Input className="h-12" value={visit.serial_no} onChange={(e) => setVisit({ ...visit, serial_no: e.target.value })} />
                  </div>
                  <div>
                    <Label className="text-xs">Visit type</Label>
                    <select
                      value={visit.visit_type}
                      onChange={(e) => setVisit({ ...visit, visit_type: e.target.value })}
                      className="h-12 w-full rounded-md border border-input bg-background px-3 text-sm"
                    >
                      <option value="amc">AMC</option>
                      <option value="guarantee">Guarantee</option>
                      <option value="customer_call">Customer call</option>
                    </select>
                  </div>
                  <div>
                    <Label className="text-xs">Visit date</Label>
                    <Input className="h-12" type="date" value={visit.visit_date} onChange={(e) => setVisit({ ...visit, visit_date: e.target.value })} />
                  </div>
                  <div>
                    <Label className="text-xs">Complaint no</Label>
                    <Input className="h-12" value={visit.complaint_number} onChange={(e) => setVisit({ ...visit, complaint_number: e.target.value })} />
                  </div>
                  <div>
                    <Label className="text-xs">In time</Label>
                    <Input className="h-12" type="time" value={visit.in_time} onChange={(e) => setVisit({ ...visit, in_time: e.target.value })} />
                  </div>
                  <div>
                    <Label className="text-xs">Out time</Label>
                    <Input className="h-12" type="time" value={visit.out_time} onChange={(e) => setVisit({ ...visit, out_time: e.target.value })} />
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Service checklist
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_CHECKLIST_ITEMS.map((item) => (
                      <button
                        key={item.key}
                        onClick={() => setChecks({ ...checks, [item.key]: !checks[item.key] })}
                        className={`rounded-full border px-4 py-2.5 text-xs font-medium ${
                          checks[item.key]
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-card text-muted-foreground"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <Label className="text-xs">Problem reported</Label>
                    <Textarea value={visit.problem_reported} onChange={(e) => setVisit({ ...visit, problem_reported: e.target.value })} />
                  </div>
                  <div>
                    <Label className="text-xs">Action taken</Label>
                    <Textarea value={visit.action_taken} onChange={(e) => setVisit({ ...visit, action_taken: e.target.value })} />
                  </div>
                  <div>
                    <Label className="text-xs">Breakdown notes</Label>
                    <Textarea value={visit.breakdown_notes} onChange={(e) => setVisit({ ...visit, breakdown_notes: e.target.value })} />
                  </div>
                  <div>
                    <Label className="text-xs">Customer remarks</Label>
                    <Textarea value={visit.customer_remarks} onChange={(e) => setVisit({ ...visit, customer_remarks: e.target.value })} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-xs">Engineer name</Label>
                      <Input className="h-12" value={visit.engineer_name} onChange={(e) => setVisit({ ...visit, engineer_name: e.target.value })} />
                    </div>
                    <div>
                      <Label className="text-xs">Engineer mobile</Label>
                      <Input className="h-12" value={visit.engineer_mobile} onChange={(e) => setVisit({ ...visit, engineer_mobile: e.target.value })} />
                    </div>
                    <div>
                      <Label className="text-xs">Amount received</Label>
                      <Input className="h-12" type="number" value={visit.received_amount} onChange={(e) => setVisit({ ...visit, received_amount: e.target.value })} />
                    </div>
                    <div>
                      <Label className="text-xs">Next due date</Label>
                      <Input className="h-12" type="date" value={visit.next_due_date} onChange={(e) => setVisit({ ...visit, next_due_date: e.target.value })} />
                    </div>
                  </div>
                </div>

                <Button className="h-12 w-full" onClick={saveVisit} disabled={saving}>
                  Save service visit
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs">Zone</Label>
                    <select
                      value={zone}
                      onChange={(e) => setZone(e.target.value as ZoneName)}
                      className="h-12 w-full rounded-md border border-input bg-background px-3 text-sm"
                    >
                      {Object.entries(ZONE_LABEL).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label className="text-xs">Audit date</Label>
                    <Input className="h-12" type="date" value={auditDate} onChange={(e) => setAuditDate(e.target.value)} />
                  </div>
                  <div className="col-span-2">
                    <Label className="text-xs">Audited by</Label>
                    <Input className="h-12" value={auditedBy} onChange={(e) => setAuditedBy(e.target.value)} />
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Voltage readings
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.keys(voltages).map((key) => (
                      <div key={key}>
                        <Label className="text-xs">{key}</Label>
                        <Input
                          className="h-12"
                          value={voltages[key as keyof typeof voltages]}
                          onChange={(e) => setVoltages({ ...voltages, [key]: e.target.value })}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Checklist</p>
                  {template.length === 0 ? (
                    <p className="rounded-lg border border-dashed border-border p-4 text-xs text-muted-foreground">
                      No checklist template for this zone yet. Voltage readings and flagged issues will still be saved.
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {template.map((item) => (
                        <div key={item} className="rounded-lg border border-border bg-card p-3">
                          <p className="mb-2 text-xs font-medium capitalize">{item}</p>
                          <div className="flex flex-wrap gap-2">
                            {CHECK_STATUSES.map((s) => (
                              <button
                                key={s}
                                onClick={() => setItemStatus({ ...itemStatus, [item]: s })}
                                className={`rounded-full border px-3 py-2 text-xs ${
                                  (itemStatus[item] ?? "ok") === s
                                    ? "border-primary bg-primary text-primary-foreground"
                                    : "border-border text-muted-foreground"
                                }`}
                              >
                                {CHECKLIST_STATUS_LABEL[s]}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <Label className="text-xs">Flagged issues, one per line</Label>
                  <Textarea rows={4} value={flagged} onChange={(e) => setFlagged(e.target.value)} />
                </div>

                <Button className="h-12 w-full" onClick={saveAudit} disabled={saving}>
                  Save zone audit
                </Button>
              </div>
            )}
          </>
        )}

        <p className="pt-4 text-center text-xs text-muted-foreground">
          <Link to="/admin" className="underline">
            Admin dashboard
          </Link>
        </p>
      </main>
    </LiftPassShell>
  );
};

export default TechnicianConsole;
