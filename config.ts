export const SITE_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://www.neilmorgan.dev";

export const BREAKPOINTS = {
  base: 0,
  sm: 480,
  md: 768,
  lg: 1082,
  xl: 1280,
  "2xl": 1536,
};
