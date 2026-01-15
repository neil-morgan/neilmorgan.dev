const BREAKPOINTS = {
  xs: "480px",
  sm: "700px",
  md: "875px",
  lg: "1024px",
  xl: "1216px",
};

module.exports = {
  BREAKPOINTS,
  environmentVariables: {
    "breakpoint-xs": BREAKPOINTS.xs,
    "breakpoint-sm": BREAKPOINTS.sm,
    "breakpoint-md": BREAKPOINTS.md,
    "breakpoint-lg": BREAKPOINTS.lg,
    "breakpoint-xl": BREAKPOINTS.xl,
  },
};
