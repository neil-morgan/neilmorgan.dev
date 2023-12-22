export const getMediaTheme = (): string | null => {
  const mql = matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";
  if (hasMediaQueryPreference) return mql.matches ? "dark" : "light";
  return null;
};
