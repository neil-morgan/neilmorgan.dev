export const normalizeFocalPoint = (
  value: unknown,
  width: number | null | undefined,
  height: number | null | undefined,
): { x: number; y: number } | undefined => {
  if (value == null) return undefined;

  if (typeof value !== "object" || !("focalPoint" in value)) {
    throw new Error("Invalid CMS focal point: expected a nested focalPoint.");
  }

  const point = value.focalPoint;
  if (
    typeof point !== "object" ||
    point === null ||
    !("x" in point) ||
    !("y" in point) ||
    typeof point.x !== "number" ||
    typeof point.y !== "number" ||
    !Number.isFinite(point.x) ||
    !Number.isFinite(point.y)
  ) {
    throw new Error(
      "Invalid CMS focal point: expected finite pixel coordinates.",
    );
  }

  if (
    typeof width !== "number" ||
    typeof height !== "number" ||
    !Number.isFinite(width) ||
    !Number.isFinite(height) ||
    width <= 0 ||
    height <= 0
  ) {
    throw new Error(
      "Invalid CMS focal point: positive asset dimensions required.",
    );
  }

  if (point.x < 0 || point.x > width || point.y < 0 || point.y > height) {
    throw new Error(
      "Invalid CMS focal point: coordinates exceed asset bounds.",
    );
  }

  return { x: point.x / width, y: point.y / height };
};
