export const isStringOrNumber = (val: unknown): val is string | number =>
  typeof val === "string" || typeof val === "number";
