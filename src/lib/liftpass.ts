import type { Database } from "@/integrations/supabase/types";

export type Site = Database["public"]["Tables"]["sites"]["Row"];
export type Lift = Database["public"]["Tables"]["lifts"]["Row"];
export type AmcContract = Database["public"]["Tables"]["amc_contracts"]["Row"];
export type AuditZone = Database["public"]["Tables"]["audit_zones"]["Row"];
export type AuditItem = Database["public"]["Tables"]["audit_checklist_items"]["Row"];
export type ServiceVisit = Database["public"]["Tables"]["service_visits"]["Row"];
export type LiftStatus = Database["public"]["Enums"]["lift_status"];
export type ZoneName = Database["public"]["Enums"]["audit_zone_name"];
export type ChecklistStatus = Database["public"]["Enums"]["checklist_status"];

export const LIFT_STATUS_LABEL: Record<LiftStatus, string> = {
  operational: "Operational",
  under_maintenance: "Under maintenance",
  out_of_service: "Out of service",
};

/** Tailwind classes per status, built on semantic tokens only. */
export const LIFT_STATUS_CLASS: Record<LiftStatus, string> = {
  operational: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30",
  under_maintenance: "bg-amber-500/10 text-amber-700 border-amber-500/30",
  out_of_service: "bg-destructive/10 text-destructive border-destructive/30",
};

export const ZONE_LABEL: Record<ZoneName, string> = {
  pit: "Pit",
  machine_room: "Machine room",
  car_top: "Car top",
  cabin: "Cabin",
  landing_doors: "Landing doors",
};

export const CHECKLIST_STATUS_LABEL: Record<ChecklistStatus, string> = {
  ok: "OK",
  needs_attention: "Needs attention",
  not_working: "Not working",
  not_applicable: "N/A",
};

export const CHECKLIST_STATUS_CLASS: Record<ChecklistStatus, string> = {
  ok: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30",
  needs_attention: "bg-amber-500/10 text-amber-700 border-amber-500/30",
  not_working: "bg-destructive/10 text-destructive border-destructive/30",
  not_applicable: "bg-muted text-muted-foreground border-border",
};

export const PIT_CHECKLIST_TEMPLATE = [
  "CWT diverter grooves",
  "CWT diverter guard",
  "CWT diverter shaft locking pin",
  "filler weight",
  "CWT compensation chain fixing",
  "car door mechanical lock system",
  "door coupler to sill clearance all landings",
  "all landing door mechanical lock",
  "track roller",
  "anti-tip roller",
  "pit light",
  "pit ladder",
  "run by",
  "CWT buffer condition",
  "car buffer condition",
  "car buffer switch if available",
  "CWT buffer switch if available",
  "upper pit switch",
  "lower pit switch",
  "safety gear switch",
  "safety gear mechanical",
  "tension weight switch condition",
  "tension weight switch in circuit",
  "travelling cable fixing",
  "travelling cable clearance",
  "compensation chain fixing car side",
  "pit earthing",
];

/** Zone templates. Only the pit is seeded; others are filled in later. */
export const ZONE_TEMPLATES: Record<ZoneName, string[]> = {
  pit: PIT_CHECKLIST_TEMPLATE,
  machine_room: [],
  car_top: [],
  cabin: [],
  landing_doors: [],
};

export const SERVICE_CHECKLIST_ITEMS: { key: string; label: string }[] = [
  { key: "grease_cup_checked", label: "Grease cup checked" },
  { key: "guide_rails_lubricated", label: "Guide rails lubricated" },
  { key: "car_pulleys_shaft_checked", label: "Car pulleys / shaft checked" },
  { key: "rope_preventer_bolt_in_position", label: "Rope preventer bolt in position" },
  { key: "door_bearings_checked", label: "Door bearings checked" },
  { key: "grease_on_track_checked", label: "Grease on track checked" },
  { key: "door_shoes_checked", label: "Door shoes checked" },
  { key: "car_shoe_checked", label: "Car shoe checked" },
  { key: "cwt_shoe_checked", label: "CWT shoe checked" },
  { key: "rope_checked_broken_strands", label: "Rope checked for broken strands" },
  { key: "guide_clits_brackets_joints_examined", label: "Guide clits / brackets / joints examined" },
  { key: "door_lock_checked", label: "Door lock checked" },
  { key: "controller_examined", label: "Controller examined" },
  { key: "ard_examined", label: "ARD examined" },
  { key: "over_speed_governor_examined", label: "Over speed governor examined" },
];

export type AmcState = "active" | "expiring_soon" | "expired" | "none";

export const amcState = (endDate?: string | null): AmcState => {
  if (!endDate) return "none";
  const end = new Date(endDate + "T00:00:00").getTime();
  const now = Date.now();
  if (end < now) return "expired";
  if (end - now < 1000 * 60 * 60 * 24 * 30) return "expiring_soon";
  return "active";
};

export const AMC_STATE_LABEL: Record<AmcState, string> = {
  active: "AMC active",
  expiring_soon: "AMC expiring soon",
  expired: "AMC expired",
  none: "No AMC on record",
};

export const AMC_STATE_CLASS: Record<AmcState, string> = {
  active: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30",
  expiring_soon: "bg-amber-500/10 text-amber-700 border-amber-500/30",
  expired: "bg-destructive/10 text-destructive border-destructive/30",
  none: "bg-muted text-muted-foreground border-border",
};

export const formatDate = (value?: string | null) =>
  value
    ? new Date(value + (value.length === 10 ? "T00:00:00" : "")).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "Not set";

export const WHATSAPP_NUMBER = "919810073456";
export const PHONE_NUMBER = "+919810073456";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/** Worst of a set of lift statuses, used for the site rollup badge. */
export const worstStatus = (statuses: LiftStatus[]): LiftStatus => {
  if (statuses.includes("out_of_service")) return "out_of_service";
  if (statuses.includes("under_maintenance")) return "under_maintenance";
  return "operational";
};

export const worstAmc = (states: AmcState[]): AmcState => {
  if (states.includes("expired")) return "expired";
  if (states.includes("expiring_soon")) return "expiring_soon";
  if (states.includes("active")) return "active";
  return "none";
};
