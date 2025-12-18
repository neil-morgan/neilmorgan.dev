export const isImageUrl = (value: unknown): value is string =>
  typeof value === "string" &&
  (value.endsWith(".svg") ||
    value.endsWith(".png") ||
    value.endsWith(".jpg") ||
    value.endsWith(".jpeg"));
