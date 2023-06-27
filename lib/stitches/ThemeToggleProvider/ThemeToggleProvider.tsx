"use client";

import { type ReactNode, createContext } from "react";
import { useColorMode } from "./useColorMode";

export const ThemeToggleContext = createContext({
  colorMode: "light",
  cycleToggleMode: () => {},
});

export const ThemeToggleProvider = ({ children }: { children: ReactNode }) => {
  const [colorMode, cycleToggleMode] = useColorMode();
  return (
    <ThemeToggleContext.Provider
      value={{
        colorMode,
        cycleToggleMode,
      }}>
      {children}
    </ThemeToggleContext.Provider>
  );
};
