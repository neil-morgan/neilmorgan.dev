export const getSavedColorMode = (): string | null => {
  try {
    const savedMode = window.localStorage.getItem("color-mode");
    if (typeof savedMode === "string") return savedMode;
  } catch (e) {
    console.warn(e);
    return null;
  }
  return null;
};
