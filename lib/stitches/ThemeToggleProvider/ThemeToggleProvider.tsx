"use client";

import { type ReactNode, createContext, useState, useEffect } from "react";
import { useColorMode } from "./useColorMode";

export const ThemeToggleContext = createContext({
  colorMode: "light",
  cycleToggleMode: () => {},
});

export const { Consumer, Provider } = ThemeToggleContext;

export const ThemeToggleProvider = ({ children }: { children: ReactNode }) => {
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
