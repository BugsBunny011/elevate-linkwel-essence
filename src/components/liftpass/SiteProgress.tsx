import { CheckCircle2, Circle, Clock3 } from "lucide-react";
import { WORK_STAGES, WORK_STATUSES, stagePosition } from "@/lib/liftpass-progress";
import { formatDate, type Site } from "@/lib/liftpass";
export const SiteProgress = ({ site }: { site: Site }) => {
  const current = stagePosition(site.work_stage);
  return <section className="space-y-4 border-b border-border py-5" aria-label="Site work progress">
    <div className="flex flex-wrap items-center justify-between gap-2"><h2 className="font-heading text-lg font-semibold">Work progress</h2><span className="rounded-md bg-muted px-3 py-1 text-sm font-medium text-primary">{WORK_STATUSES[site.work_status as keyof typeof WORK_STATUSES]}</span></div>
    <ol className="space-y-3">{WORK_STAGES.map((stage, index) => {
      const done = index < current || site.work_status === "completed";
      const active = index === current && !done;
      const Icon = done ? CheckCircle2 : active ? Clock3 : Circle;
      return <li key={stage.value} className={`flex items-center gap-3 text-sm ${done || active ? "text-primary" : "text-muted-foreground"}`}><Icon size={18} className="shrink-0" /><span className={active ? "font-semibold" : ""}>{stage.label}</span><span className="ml-auto text-xs">{done ? "Complete" : active ? (site.work_status === "on_hold" ? "Paused" : "Current stage") : "Upcoming"}</span></li>;
    })}</ol>
    {site.progress_updated_at && <p className="text-xs text-muted-foreground">Last updated {formatDate(site.progress_updated_at)}</p>}
  </section>;
};
