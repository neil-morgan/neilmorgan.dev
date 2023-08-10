"use client";

import { type ReactNode, createContext, useState, useEffect } from "react";
import { useColorMode } from "./useColorMode";

export const ThemeToggleContext = createContext({
  colorMode: "light",
  cycleToggleMode: () => {},
});

export const Consumer = ThemeToggleContext.Consumer;
export const Provider = ThemeToggleContext.Provider;

export const ThemeToggleHandler = ({ children }: { children: ReactNode }) => {
  const [colorMode, cycleToggleMode] = useColorMode();
  return (
    <Provider
      value={{
        colorMode,
        cycleToggleMode,
      }}>
      {children}
    </Provider>
  );
};

export const ThemeToggleProvider = ({ children }: { children: ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? <ThemeToggleHandler>{children}</ThemeToggleHandler> : null;
};
