// Re-export breakpoints from the .cjs file (single source of truth)
import breakpointsConfig from "./breakpoints.cjs";

export const BREAKPOINTS = breakpointsConfig.BREAKPOINTS;
