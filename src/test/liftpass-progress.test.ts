import { describe, expect, it } from "vitest";
import { needsClientSignIn, stagePosition } from "@/lib/liftpass-progress";
describe("LiftPass ongoing-site access", () => {
  it("requires sign-in for ongoing work", () => expect(needsClientSignIn("ongoing")).toBe(true));
  it("keeps on-hold progress private", () => expect(needsClientSignIn("on_hold")).toBe(true));
  it("keeps completed project progress private", () => expect(needsClientSignIn("completed")).toBe(true));
  it("preserves public operational QR access", () => expect(needsClientSignIn("operational")).toBe(false));
  it("places installation before testing", () => expect(stagePosition("installation")).toBeLessThan(stagePosition("testing")));
});
