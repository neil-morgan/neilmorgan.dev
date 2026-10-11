import { describe, expect, it } from "vitest";
import { normalizeFocalPoint } from "./normalize-focal-point";

describe("normalizeFocalPoint", () => {
  it("normalizes the actual CMS rocket focal point using source dimensions", () => {
    const point = normalizeFocalPoint(
      { focalPoint: { x: 2721, y: 992 } },
      3840,
      2160,
    );
    expect(point?.x).toBeCloseTo(0.70859375);
    expect(point?.y).toBeCloseTo(0.4592592593);
  });

  it.each([null, undefined])("leaves an absent point %s unset", (value) => {
    expect(normalizeFocalPoint(value, null, undefined)).toBeUndefined();
  });

  it.each([
    { x: 0, y: 0, expected: { x: 0, y: 0 } },
    { x: 100, y: 200, expected: { x: 1, y: 1 } },
    { x: 50, y: 100, expected: { x: 0.5, y: 0.5 } },
  ])("handles boundary and center coordinates $x, $y", ({ x, y, expected }) => {
    expect(normalizeFocalPoint({ focalPoint: { x, y } }, 100, 200)).toEqual(
      expected,
    );
  });

  it.each([
    {},
    "invalid",
    { x: 10, y: 20 },
    { focalPoint: null },
    { focalPoint: {} },
    { focalPoint: { x: "10", y: 20 } },
    { focalPoint: { x: NaN, y: 20 } },
    { focalPoint: { x: 10, y: Infinity } },
    { focalPoint: { x: -1, y: 20 } },
    { focalPoint: { x: 101, y: 20 } },
    { focalPoint: { x: 10, y: 201 } },
  ])("rejects malformed or out-of-bounds CMS data: %j", (value) => {
    expect(() => normalizeFocalPoint(value, 100, 200)).toThrow(
      "Invalid CMS focal point",
    );
  });

  it.each([null, undefined, 0, -1, NaN, Infinity])(
    "rejects unusable dimensions: %s",
    (dimension) => {
      const value = { focalPoint: { x: 0, y: 0 } };
      expect(() => normalizeFocalPoint(value, dimension, 200)).toThrow(
        "positive asset dimensions required",
      );
      expect(() => normalizeFocalPoint(value, 100, dimension)).toThrow(
        "positive asset dimensions required",
      );
    },
  );
});
