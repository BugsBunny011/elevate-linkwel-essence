export const WORK_STATUSES = { operational: "Operational site", ongoing: "Work ongoing", on_hold: "On hold", completed: "Work completed" } as const;
export const WORK_STAGES = [
  { value: "planning", label: "Planning & approval" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "delivery", label: "Material delivery" },
  { value: "installation", label: "Installation" },
  { value: "testing", label: "Testing & commissioning" },
  { value: "handover", label: "Handover" },
] as const;
export const needsClientSignIn = (status: string) => status !== "operational";
export const stagePosition = (stage: string) => WORK_STAGES.findIndex((item) => item.value === stage);
