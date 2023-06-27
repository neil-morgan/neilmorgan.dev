export const saveColorMode = (newMode: string) => {
  try {
    if (typeof newMode === "string")
      window.localStorage.setItem("color-mode", newMode);
  } catch (e) {
    console.warn(e);
  }
};
