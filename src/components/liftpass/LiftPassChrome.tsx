import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

/** Keeps every LiftPass route out of search engines until rollout is approved. */
export const NoIndex = ({ title }: { title: string }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="robots" content="noindex, nofollow" />
    <meta name="googlebot" content="noindex, nofollow" />
  </Helmet>
);

export const Logomark = () => (
  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary font-heading text-sm font-bold tracking-tight text-primary-foreground">
    LE
  </span>
);

export const LiftPassShell = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background text-foreground">{children}</div>
);

export const StatusDot = ({ tone }: { tone: "green" | "amber" | "red" | "muted" }) => {
  const map = {
    green: "bg-emerald-500",
    amber: "bg-amber-500",
    red: "bg-destructive",
    muted: "bg-muted-foreground",
  } as const;
  return <span className={`inline-block h-2.5 w-2.5 rounded-full ${map[tone]}`} />;
};
