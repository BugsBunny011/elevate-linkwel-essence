import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, ExternalLink, Plus, Save, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { NoIndex, LiftPassShell } from "@/components/liftpass/LiftPassChrome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  LIFT_STATUS_LABEL,
  ZONE_LABEL,
  formatDate,
  type AmcContract,
  type AuditZone,
  type Lift,
  type LiftStatus,
  type Site,
} from "@/lib/liftpass";

const PROFILE_FIELDS: { key: keyof Lift; label: string; type?: string }[] = [
  { key: "lift_no", label: "Lift no" },
  { key: "lift_type", label: "Lift type" },
  { key: "lift_make", label: "Make" },
  { key: "maintained_by", label: "Maintained by" },
  { key: "crm_no", label: "CRM no" },
  { key: "ged", label: "GED" },
  { key: "equipment_type", label: "Equipment type" },
  { key: "customer_name", label: "Customer name" },
  { key: "customer_type", label: "Customer type" },
  { key: "building_type", label: "Building type" },
  { key: "site_contact_name", label: "Site contact" },
  { key: "site_contact_mobile", label: "Site contact mobile" },
  { key: "key_location", label: "Key location" },
  { key: "no_of_floors", label: "No. of floors", type: "number" },
  { key: "group_size", label: "Group size" },
  { key: "controller", label: "Controller" },
  { key: "floor_designation", label: "Floor designation" },
  { key: "installation_year", label: "Installation year", type: "number" },
  { key: "speed_mps", label: "Speed (m/s)", type: "number" },
  { key: "capacity_kg", label: "Capacity (kg)", type: "number" },
  { key: "capacity_persons", label: "Capacity (persons)", type: "number" },
  { key: "drive_name", label: "Drive name" },
  { key: "drive_kw", label: "Drive kW" },
  { key: "drive_input_voltage", label: "Drive input voltage" },
  { key: "winding_unit_type", label: "Winding unit type" },
  { key: "hp", label: "HP" },
  { key: "kw", label: "kW" },
  { key: "amp", label: "Amp" },
  { key: "rpm", label: "RPM" },
  { key: "gear_name", label: "Gear name" },
  { key: "gear_ratio", label: "Gear ratio" },
  { key: "sheave_dia", label: "Sheave dia" },
  { key: "sheave_group", label: "Sheave group" },
  { key: "rope_size", label: "Rope size" },
  { key: "no_of_ropes", label: "No. of ropes", type: "number" },
  { key: "rope_type", label: "Rope type" },
  { key: "roping_type", label: "Roping type" },
  { key: "rescue_device_name", label: "Rescue device" },
  { key: "rescue_device_status", label: "Rescue device status" },
  { key: "osg_rope_size", label: "OSG rope size" },
  { key: "osg_switch_status", label: "OSG switch status" },
  { key: "osg_electrical_trip_speed", label: "OSG electrical trip speed" },
  { key: "osg_mechanical_trip_speed", label: "OSG mechanical trip speed" },
];

const NUMERIC_KEYS = new Set([
  "no_of_floors",
  "installation_year",
  "speed_mps",
  "capacity_kg",
  "capacity_persons",
  "no_of_ropes",
]);

const fetchSiteDetail = async (siteId: string) => {
  const { data: site } = await supabase.from("sites").select("*").eq("id", siteId).maybeSingle();
  const { data: lifts } = await supabase.from("lifts").select("*").eq("site_id", siteId).order("lift_no");
  const liftIds = (lifts ?? []).map((l) => l.id);
  const { data: contracts } = liftIds.length
    ? await supabase.from("amc_contracts").select("*").in("lift_id", liftIds)
    : { data: [] as AmcContract[] };
  const { data: zones } = liftIds.length
    ? await supabase.from("audit_zones").select("*").in("lift_id", liftIds).order("audit_date", { ascending: false })
    : { data: [] as AuditZone[] };
  return { site: site as Site | null, lifts: (lifts ?? []) as Lift[], contracts: contracts ?? [], zones: zones ?? [] };
};

const LiftEditor = ({
  lift,
  contract,
  zones,
  onChanged,
}: {
  lift: Lift;
  contract: AmcContract | null;
  zones: AuditZone[];
  onChanged: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<Record<string, string>>(() =>
    Object.fromEntries(PROFILE_FIELDS.map((f) => [f.key, lift[f.key] === null || lift[f.key] === undefined ? "" : String(lift[f.key])]))
  );
  const [status, setStatus] = useState<LiftStatus>(lift.status);
  const [amc, setAmc] = useState({
    contract_number: contract?.contract_number ?? "",
    start_date: contract?.start_date ?? "",
    end_date: contract?.end_date ?? "",
    amc_type: contract?.amc_type ?? "comprehensive",
    renewal_contact: contract?.renewal_contact ?? "",
  });
  const [saving, setSaving] = useState(false);

  const save = async () => {
    setSaving(true);
    const payload: Record<string, unknown> = { status };
    PROFILE_FIELDS.forEach(({ key }) => {
      const value = form[key as string];
      payload[key as string] = value === "" ? null : NUMERIC_KEYS.has(key as string) ? Number(value) : value;
    });
    const { error } = await supabase
      .from("lifts")
      .update(payload as never)
      .eq("id", lift.id);
    if (error) {
      setSaving(false);
      return toast.error(error.message);
    }

    const amcPayload = {
      lift_id: lift.id,
      contract_number: amc.contract_number || null,
      start_date: amc.start_date || null,
      end_date: amc.end_date || null,
      amc_type: amc.amc_type as "comprehensive" | "non_comprehensive",
      renewal_contact: amc.renewal_contact || null,
    };
    const amcResult = contract
      ? await supabase.from("amc_contracts").update(amcPayload).eq("id", contract.id)
      : await supabase.from("amc_contracts").insert(amcPayload);
    setSaving(false);
    if (amcResult.error) return toast.error(amcResult.error.message);
    toast.success(`${lift.lift_no} saved`);
    onChanged();
  };

  const remove = async () => {
    const { error } = await supabase.from("lifts").delete().eq("id", lift.id);
    if (error) return toast.error(error.message);
    toast.success("Lift removed");
    onChanged();
  };

  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div>
          <p className="font-heading font-semibold">{lift.lift_no}</p>
          <p className="text-xs capitalize text-muted-foreground">
            {lift.lift_type ?? "Lift"} · {LIFT_STATUS_LABEL[lift.status]}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as LiftStatus)}
            className="h-9 rounded-md border border-input bg-background px-2 text-sm"
          >
            {Object.entries(LIFT_STATUS_LABEL).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <Button size="sm" variant="outline" onClick={() => setOpen(!open)}>
            {open ? "Hide details" : "Edit details"}
          </Button>
          <Button size="sm" onClick={save} disabled={saving}>
            <Save size={14} /> Save
          </Button>
        </div>
      </div>

      {open && (
        <div className="space-y-6 border-t border-border p-4">
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Technical profile
            </h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {PROFILE_FIELDS.map((field) => (
                <div key={field.key as string}>
                  <Label className="text-xs">{field.label}</Label>
                  <Input
                    type={field.type ?? "text"}
                    value={form[field.key as string] ?? ""}
                    onChange={(e) => setForm({ ...form, [field.key as string]: e.target.value })}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Maintenance contract
            </h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <Label className="text-xs">Contract number</Label>
                <Input value={amc.contract_number} onChange={(e) => setAmc({ ...amc, contract_number: e.target.value })} />
              </div>
              <div>
                <Label className="text-xs">Start date</Label>
                <Input type="date" value={amc.start_date} onChange={(e) => setAmc({ ...amc, start_date: e.target.value })} />
              </div>
              <div>
                <Label className="text-xs">End date</Label>
                <Input type="date" value={amc.end_date} onChange={(e) => setAmc({ ...amc, end_date: e.target.value })} />
              </div>
              <div>
                <Label className="text-xs">Type</Label>
                <select
                  value={amc.amc_type}
                  onChange={(e) => setAmc({ ...amc, amc_type: e.target.value as typeof amc.amc_type })}
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                >
                  <option value="comprehensive">Comprehensive</option>
                  <option value="non_comprehensive">Non comprehensive</option>
                </select>
              </div>
              <div>
                <Label className="text-xs">Renewal contact</Label>
                <Input value={amc.renewal_contact} onChange={(e) => setAmc({ ...amc, renewal_contact: e.target.value })} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Audit zones</h4>
            {zones.length === 0 ? (
              <p className="text-xs text-muted-foreground">No audits recorded yet.</p>
            ) : (
              <ul className="space-y-1 text-xs">
                {zones.map((z) => (
                  <li key={z.id} className="flex justify-between rounded-md bg-muted px-3 py-2">
                    <span>{ZONE_LABEL[z.zone]}</span>
                    <span className="text-muted-foreground">
                      {formatDate(z.audit_date)} · {z.flagged_issues?.length ?? 0} issues noted
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Button variant="outline" size="sm" onClick={remove} className="text-destructive">
            <Trash2 size={14} /> Remove lift
          </Button>
        </div>
      )}
    </div>
  );
};

const AdminSiteDetail = () => {
  const { siteId = "" } = useParams();
  const qc = useQueryClient();
  const { data, isLoading } = useQuery({ queryKey: ["liftpass-site-detail", siteId], queryFn: () => fetchSiteDetail(siteId) });
  const [newLift, setNewLift] = useState("");

  const refresh = () => {
    qc.invalidateQueries({ queryKey: ["liftpass-site-detail", siteId] });
    qc.invalidateQueries({ queryKey: ["liftpass-admin-overview"] });
  };

  const addLift = async () => {
    if (!newLift.trim()) return;
    const { error } = await supabase.from("lifts").insert({ site_id: siteId, lift_no: newLift.trim() });
    if (error) return toast.error(error.message);
    setNewLift("");
    toast.success("Lift added");
    refresh();
  };

  return (
    <LiftPassShell>
      <NoIndex title={`${data?.site?.name ?? "Site"} | LiftPass admin`} />
      <main className="mx-auto max-w-5xl space-y-6 px-4 py-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <Link to="/admin" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
              <ArrowLeft size={14} /> All sites
            </Link>
            <h1 className="font-heading text-2xl font-semibold">{data?.site?.name ?? (isLoading ? "Loading" : "Site")}</h1>
            <p className="text-sm text-muted-foreground">
              {data?.site?.address}
              {data?.site?.city ? `, ${data.site.city}` : ""} · Code {data?.site?.site_code}
            </p>
          </div>
          {data?.site && (
            <Button asChild variant="outline" size="sm">
              <Link to={`/liftpass/${data.site.site_code}`} target="_blank">
                <ExternalLink size={14} /> View public page
              </Link>
            </Button>
          )}
        </div>

        <div className="flex gap-2">
          <Input placeholder="New lift number, e.g. Lift 3" value={newLift} onChange={(e) => setNewLift(e.target.value)} className="max-w-xs" />
          <Button onClick={addLift}>
            <Plus size={14} /> Add lift
          </Button>
        </div>

        <div className="space-y-3">
          {(data?.lifts ?? []).map((lift) => (
            <LiftEditor
              key={lift.id}
              lift={lift}
              contract={(data?.contracts ?? []).find((c) => c.lift_id === lift.id) ?? null}
              zones={(data?.zones ?? []).filter((z) => z.lift_id === lift.id)}
              onChanged={refresh}
            />
          ))}
          {!isLoading && (data?.lifts ?? []).length === 0 && (
            <p className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
              No lifts at this site yet.
            </p>
          )}
        </div>
      </main>
    </LiftPassShell>
  );
};

export default AdminSiteDetail;
