export const isImageUrl = (value: any): value is string =>
  typeof value === "string" &&
  (value.endsWith(".svg") ||
    value.endsWith(".png") ||
    value.endsWith(".jpg") ||
    value.endsWith(".jpeg"));
