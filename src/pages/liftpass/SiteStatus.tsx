import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  ChevronDown,
  Phone,
  MessageCircle,
  MapPin,
  AlertTriangle,
  CheckCircle2,
  Wrench,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { NoIndex, Logomark, LiftPassShell } from "@/components/liftpass/LiftPassChrome";
import {
  AMC_STATE_CLASS,
  AMC_STATE_LABEL,
  CHECKLIST_STATUS_CLASS,
  CHECKLIST_STATUS_LABEL,
  LIFT_STATUS_CLASS,
  LIFT_STATUS_LABEL,
  SERVICE_CHECKLIST_ITEMS,
  ZONE_LABEL,
  amcState,
  formatDate,
  whatsappLink,
  worstStatus,
  PHONE_NUMBER,
  type AmcContract,
  type AuditItem,
  type AuditZone,
  type Lift,
  type ServiceVisit,
  type Site,
} from "@/lib/liftpass";

interface LiftBundle {
  lift: Lift;
  contract: AmcContract | null;
  zones: { zone: AuditZone; items: AuditItem[] }[];
  visits: ServiceVisit[];
}

const fetchSite = async (siteCode: string) => {
  const { data: site, error } = await supabase
    .from("sites")
    .select("*")
    .eq("site_code", siteCode)
    .maybeSingle();
  if (error) throw error;
  if (!site) return null;

  const { data: lifts } = await supabase
    .from("lifts")
    .select("*")
    .eq("site_id", site.id)
    .order("lift_no");
  const liftIds = (lifts ?? []).map((l) => l.id);

  const [contracts, zones, visits] = await Promise.all([
    liftIds.length
      ? supabase.from("amc_contracts").select("*").in("lift_id", liftIds)
      : Promise.resolve({ data: [] as AmcContract[] }),
    liftIds.length
      ? supabase.from("audit_zones").select("*").in("lift_id", liftIds).order("audit_date", { ascending: false })
      : Promise.resolve({ data: [] as AuditZone[] }),
    liftIds.length
      ? supabase.from("service_visits").select("*").in("lift_id", liftIds).order("visit_date", { ascending: false })
      : Promise.resolve({ data: [] as ServiceVisit[] }),
  ]);

  const zoneIds = (zones.data ?? []).map((z) => z.id);
  const { data: items } = zoneIds.length
    ? await supabase.from("audit_checklist_items").select("*").in("audit_zone_id", zoneIds)
    : { data: [] as AuditItem[] };

  const bundles: LiftBundle[] = (lifts ?? []).map((lift) => ({
    lift,
    contract: (contracts.data ?? []).find((c) => c.lift_id === lift.id) ?? null,
    zones: (zones.data ?? [])
      .filter((z) => z.lift_id === lift.id)
      .map((zone) => ({ zone, items: (items ?? []).filter((i) => i.audit_zone_id === zone.id) })),
    visits: (visits.data ?? []).filter((v) => v.lift_id === lift.id),
  }));

  return { site: site as Site, bundles };
};

const Badge = ({ className, children }: { className: string; children: React.ReactNode }) => (
  <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${className}`}>
    {children}
  </span>
);

const ZoneCard = ({ zone, items }: { zone: AuditZone; items: AuditItem[] }) => {
  const [open, setOpen] = useState(false);
  const flagged = items.filter((i) => i.status === "needs_attention" || i.status === "not_working").length;
  const voltages = (zone.voltage_readings ?? {}) as Record<string, string>;

  return (
    <div className="rounded-lg border border-border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <div>
          <p className="text-sm font-medium">{ZONE_LABEL[zone.zone]}</p>
          <p className="text-xs text-muted-foreground">
            {items.length} checked{flagged > 0 ? `, ${flagged} flagged` : ""} · {formatDate(zone.audit_date)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge
            className={
              flagged > 0
                ? "bg-amber-500/10 text-amber-700 border-amber-500/30"
                : "bg-emerald-500/10 text-emerald-700 border-emerald-500/30"
            }
          >
            {flagged > 0 ? `${flagged} flagged` : "All clear"}
          </Badge>
          <ChevronDown size={16} className={`text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
        </div>
      </button>

      {open && (
        <div className="space-y-4 border-t border-border px-4 py-3">
          {Object.keys(voltages).length > 0 && (
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Voltage readings
              </p>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(voltages).map(([key, value]) => (
                  <div key={key} className="rounded-md bg-muted px-3 py-2 text-xs">
                    <span className="text-muted-foreground">{key}</span>
                    <p className="font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {zone.flagged_issues?.length > 0 && (
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Issues noted</p>
              <ul className="space-y-1">
                {zone.flagged_issues.map((issue, i) => (
                  <li key={i} className="flex gap-2 text-xs text-foreground">
                    <AlertTriangle size={14} className="mt-0.5 shrink-0 text-amber-600" />
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Checklist</p>
            <ul className="divide-y divide-border">
              {items.map((item) => (
                <li key={item.id} className="flex items-center justify-between gap-3 py-2">
                  <span className="text-xs capitalize">{item.item_name}</span>
                  <Badge className={CHECKLIST_STATUS_CLASS[item.status]}>
                    {CHECKLIST_STATUS_LABEL[item.status]}
                  </Badge>
                </li>
              ))}
              {items.length === 0 && <li className="py-2 text-xs text-muted-foreground">No items recorded.</li>}
            </ul>
          </div>
          {zone.audited_by && <p className="text-xs text-muted-foreground">Audited by {zone.audited_by}</p>}
        </div>
      )}
    </div>
  );
};

const VisitCard = ({ visit }: { visit: ServiceVisit }) => {
  const [open, setOpen] = useState(false);
  const checklist = (visit.checklist ?? {}) as Record<string, boolean>;
  const done = SERVICE_CHECKLIST_ITEMS.filter((i) => checklist[i.key]).length;

  return (
    <div className="rounded-lg border border-border bg-card">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left">
        <div>
          <p className="text-sm font-medium">{formatDate(visit.visit_date)}</p>
          <p className="text-xs capitalize text-muted-foreground">
            {visit.visit_type.replace("_", " ")} visit · {done}/{SERVICE_CHECKLIST_ITEMS.length} checks done
          </p>
        </div>
        <ChevronDown size={16} className={`text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="space-y-3 border-t border-border px-4 py-3">
          <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {SERVICE_CHECKLIST_ITEMS.map((item) => (
              <li key={item.key} className="flex items-center gap-2 text-xs">
                {checklist[item.key] ? (
                  <CheckCircle2 size={14} className="shrink-0 text-emerald-600" />
                ) : (
                  <AlertTriangle size={14} className="shrink-0 text-muted-foreground" />
                )}
                <span className={checklist[item.key] ? "" : "text-muted-foreground"}>{item.label}</span>
              </li>
            ))}
          </ul>
          {visit.problem_reported && (
            <p className="text-xs">
              <span className="text-muted-foreground">Problem reported: </span>
              {visit.problem_reported}
            </p>
          )}
          {visit.action_taken && (
            <p className="text-xs">
              <span className="text-muted-foreground">Action taken: </span>
              {visit.action_taken}
            </p>
          )}
          {visit.customer_remarks && (
            <p className="text-xs">
              <span className="text-muted-foreground">Customer remarks: </span>
              {visit.customer_remarks}
            </p>
          )}
          <p className="text-xs text-muted-foreground">
            {visit.engineer_name ? `Engineer: ${visit.engineer_name}` : ""}
            {visit.in_time ? ` · ${visit.in_time.slice(0, 5)}` : ""}
            {visit.out_time ? ` to ${visit.out_time.slice(0, 5)}` : ""}
          </p>
        </div>
      )}
    </div>
  );
};

const LiftCard = ({ bundle, siteName }: { bundle: LiftBundle; siteName: string }) => {
  const [open, setOpen] = useState(false);
  const [showSpec, setShowSpec] = useState(false);
  const { lift, contract, zones, visits } = bundle;
  const amc = amcState(contract?.end_date);
  const nextDue = visits.find((v) => v.next_due_date)?.next_due_date ?? null;

  const spec: [string, string | number | null | undefined][] = [
    ["Lift type", lift.lift_type],
    ["Make", lift.lift_make],
    ["Maintained by", lift.maintained_by],
    ["Capacity", lift.capacity_kg ? `${lift.capacity_kg} kg${lift.capacity_persons ? ` / ${lift.capacity_persons} persons` : ""}` : null],
    ["Floors", lift.no_of_floors],
    ["Speed", lift.speed_mps ? `${lift.speed_mps} m/s` : null],
    ["Installed", lift.installation_year],
    ["Controller", lift.controller],
    ["Drive", lift.drive_name],
    ["Gear", lift.gear_name],
    ["Ropes", lift.no_of_ropes ? `${lift.no_of_ropes} x ${lift.rope_size ?? ""}` : null],
    ["Rescue device", lift.rescue_device_name],
    ["OSG switch", lift.osg_switch_status],
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <button onClick={() => setOpen(!open)} className="flex w-full items-start justify-between gap-3 p-4 text-left">
        <div className="min-w-0">
          <p className="font-heading text-lg font-semibold leading-tight">{lift.lift_no}</p>
          <p className="text-xs capitalize text-muted-foreground">{lift.lift_type ?? "Lift"}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge className={AMC_STATE_CLASS[amc]}>{AMC_STATE_LABEL[amc]}</Badge>
            {nextDue && (
              <Badge className="border-border bg-muted text-muted-foreground">Next service {formatDate(nextDue)}</Badge>
            )}
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-2">
          <span className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${LIFT_STATUS_CLASS[lift.status]}`}>
            {LIFT_STATUS_LABEL[lift.status]}
          </span>
          <ChevronDown size={18} className={`text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
        </div>
      </button>

      {open && (
        <div className="space-y-5 border-t border-border bg-background/40 p-4">
          <section>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Maintenance contract
            </h3>
            <div className="rounded-lg border border-border bg-card p-3 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <p><span className="text-muted-foreground">Contract </span>{contract?.contract_number ?? "Not on record"}</p>
                <p className="capitalize"><span className="text-muted-foreground">Type </span>{contract?.amc_type?.replace("_", " ") ?? "-"}</p>
                <p><span className="text-muted-foreground">Start </span>{formatDate(contract?.start_date)}</p>
                <p><span className="text-muted-foreground">End </span>{formatDate(contract?.end_date)}</p>
              </div>
              <a
                href={whatsappLink(`Hi Linkwel, I would like to discuss the AMC renewal for ${siteName}, ${lift.lift_no}.`)}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary px-3 py-2 text-xs font-semibold text-primary"
              >
                <MessageCircle size={14} /> Contact for renewal
              </a>
            </div>
          </section>

          <section>
            <div className="rounded-lg border border-border bg-card">
              <button onClick={() => setShowSpec(!showSpec)} className="flex w-full items-center justify-between px-3 py-2.5 text-left text-xs font-semibold">
                View technical details
                <ChevronDown size={14} className={`transition-transform ${showSpec ? "rotate-180" : ""}`} />
              </button>
              {showSpec && (
                <dl className="grid grid-cols-2 gap-x-3 gap-y-2 border-t border-border px-3 py-3 text-xs">
                  {spec
                    .filter(([, value]) => value !== null && value !== undefined && value !== "")
                    .map(([label, value]) => (
                      <div key={label}>
                        <dt className="text-muted-foreground">{label}</dt>
                        <dd className="font-medium capitalize">{String(value)}</dd>
                      </div>
                    ))}
                </dl>
              )}
            </div>
          </section>

          <section>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Health by zone</h3>
            <div className="space-y-2">
              {zones.map(({ zone, items }) => (
                <ZoneCard key={zone.id} zone={zone} items={items} />
              ))}
              {zones.length === 0 && (
                <p className="rounded-lg border border-dashed border-border px-3 py-4 text-xs text-muted-foreground">
                  No technical audit recorded yet for this lift.
                </p>
              )}
            </div>
          </section>

          <section>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Recent service visits
            </h3>
            <div className="space-y-2">
              {visits.slice(0, 6).map((visit) => (
                <VisitCard key={visit.id} visit={visit} />
              ))}
              {visits.length === 0 && (
                <p className="rounded-lg border border-dashed border-border px-3 py-4 text-xs text-muted-foreground">
                  No service visits logged yet.
                </p>
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

const SiteStatus = () => {
  const { siteCode = "" } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["liftpass-site", siteCode],
    queryFn: () => fetchSite(siteCode),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [siteCode]);

  const rollup = useMemo(() => {
    if (!data) return null;
    const statuses = data.bundles.map((b) => b.lift.status);
    return worstStatus(statuses);
  }, [data]);

  const site = data?.site;

  return (
    <LiftPassShell>
      <NoIndex title={site ? `${site.name} lift status | LiftPass` : "LiftPass"} />

      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-4">
          <Logomark />
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">LiftPass</p>
            <h1 className="truncate font-heading text-lg font-semibold leading-tight">
              {site?.name ?? (isLoading ? "Loading site" : "Site not found")}
            </h1>
            {site?.address && (
              <p className="flex items-center gap-1 truncate text-xs text-muted-foreground">
                <MapPin size={12} /> {site.address}
                {site.city ? `, ${site.city}` : ""}
              </p>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 pb-32 pt-4">
        {isLoading && <p className="py-10 text-center text-sm text-muted-foreground">Loading lift status...</p>}

        {(isError || (!isLoading && !site)) && (
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <h2 className="font-heading text-base font-semibold">Site not found</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We could not find a site for code {siteCode}. Please check the tag or contact Linkwel.
            </p>
          </div>
        )}

        {site && data && (
          <>
            <div
              className={`mb-4 flex items-center justify-between gap-3 rounded-xl border p-4 ${
                rollup ? LIFT_STATUS_CLASS[rollup] : ""
              }`}
            >
              <div>
                <p className="text-sm font-semibold">
                  {rollup === "operational"
                    ? "All lifts operational"
                    : rollup === "under_maintenance"
                      ? "A lift needs attention"
                      : "A lift is out of service"}
                </p>
                <p className="text-xs opacity-80">
                  {data.bundles.length} lift{data.bundles.length === 1 ? "" : "s"} at this site · Site code {site.site_code}
                </p>
              </div>
              {rollup === "operational" ? <CheckCircle2 size={26} /> : <Wrench size={26} />}
            </div>

            <div className="space-y-3">
              {data.bundles.map((bundle) => (
                <LiftCard key={bundle.lift.id} bundle={bundle} siteName={site.name} />
              ))}
              {data.bundles.length === 0 && (
                <p className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
                  No lifts recorded at this site yet.
                </p>
              )}
            </div>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              Maintained by Linkwel Engineers. Status updated after every service visit.
            </p>
          </>
        )}
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-2xl gap-3 px-4 py-3">
          <a
            href={whatsappLink(`Hi Linkwel, I would like to report an issue at ${site?.name ?? siteCode}.`)}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
          >
            <MessageCircle size={16} /> Report an issue
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-md border border-primary px-4 py-3 text-sm font-semibold text-primary"
          >
            <Phone size={16} /> Call Linkwel
          </a>
        </div>
      </div>
    </LiftPassShell>
  );
};

export default SiteStatus;
