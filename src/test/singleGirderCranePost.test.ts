import { describe, expect, it } from "vitest";
import { singleGirderCranePost } from "@/data/singleGirderCranePost";

describe("single girder crane publication", () => {
  it("uses the requested publication day, not a build-time date", () => {
    expect(singleGirderCranePost.date).toBe("2026-10-26");
  });
});