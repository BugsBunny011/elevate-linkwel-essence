import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown, Phone, MessageCircle, MapPin, CheckCircle2, Wrench } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { NoIndex, Logomark, LiftPassShell } from "@/components/liftpass/LiftPassChrome";
import {
  AMC_STATE_CLASS,
  AMC_STATE_LABEL,
  LIFT_STATUS_CLASS,
  LIFT_STATUS_LABEL,
  amcState,
  formatDate,
  whatsappLink,
  worstStatus,
  PHONE_NUMBER,
  type AmcContract,
  type Lift,
  type Site,
} from "@/lib/liftpass";

interface LiftBundle {
  lift: PublicLift;
  contract: AmcContract | null;
  issueCount: number;
}

type PublicLift = Pick<Lift, "id" | "site_id" | "lift_no" | "lift_type" | "status">;

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
    .select("id, site_id, lift_no, lift_type, status")
    .eq("site_id", site.id)
    .order("lift_no");
  const liftIds = (lifts ?? []).map((l) => l.id);

  const [contracts, counts] = await Promise.all([
    liftIds.length
      ? supabase.from("amc_contracts").select("*").in("lift_id", liftIds)
      : Promise.resolve({ data: [] as AmcContract[], error: null }),
    liftIds.length
      ? supabase.rpc("get_public_liftpass_issue_counts", { _lift_ids: liftIds })
      : Promise.resolve({ data: [] as { lift_id: string; issue_count: number }[], error: null }),
  ]);

  if (counts.error) throw counts.error;

  const bundles: LiftBundle[] = (lifts ?? []).map((lift) => ({
    lift,
    contract: (contracts.data ?? []).find((c) => c.lift_id === lift.id) ?? null,
    issueCount: (counts.data ?? []).find((c) => c.lift_id === lift.id)?.issue_count ?? 0,
  }));

  return { site: site as Site, bundles };
};

const Badge = ({ className, children }: { className: string; children: React.ReactNode }) => (
  <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${className}`}>
    {children}
  </span>
);

const LiftCard = ({ bundle, siteName }: { bundle: LiftBundle; siteName: string }) => {
  const [open, setOpen] = useState(false);
  const { lift, contract, issueCount } = bundle;
  const amc = amcState(contract?.end_date);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <button onClick={() => setOpen(!open)} className="flex w-full items-start justify-between gap-3 p-4 text-left">
        <div className="min-w-0">
          <p className="font-heading text-lg font-semibold leading-tight">{lift.lift_no}</p>
          <p className="text-xs capitalize text-muted-foreground">{lift.lift_type ?? "Lift"}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge className={AMC_STATE_CLASS[amc]}>{AMC_STATE_LABEL[amc]}</Badge>
            <Badge className="border-border bg-muted text-muted-foreground">{issueCount} issue{issueCount === 1 ? "" : "s"} noted</Badge>
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

          <p className="text-sm font-medium">{issueCount} issue{issueCount === 1 ? "" : "s"} noted</p>
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
