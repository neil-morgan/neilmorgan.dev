const BREAKPOINTS = {
  base: 0,
  xs: 480,
  sm: 700,
  md: 875,
  lg: 1024,
  xl: 1216,
};

const environmentVariables = Object.fromEntries(
  Object.entries(BREAKPOINTS)
    .filter(([name]) => name !== "base")
    .map(([name, value]) => [`breakpoint-${name}`, `${value}px`]),
);

module.exports = {
  BREAKPOINTS,
  environmentVariables,
};
