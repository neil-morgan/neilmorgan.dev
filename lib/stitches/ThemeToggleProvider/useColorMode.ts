"use client"

import { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../config";
import { getSavedColorMode, saveColorMode, getMediaTheme } from "./helpers";

const availableThemes: {
  [x: string]: string;
} = {
  light: lightTheme.className,
  dark: darkTheme.className,
};

export const useColorMode = (): [string, () => void] => {
  const [colorMode, setColorMode] = useState("");
  const html = document.documentElement;

  const applyColorMode = (newMode: string) => {
    html.classList.remove(availableThemes[colorMode]);
    html.classList.add(availableThemes[newMode]);
    setColorMode(newMode);
  };

  let savedColorMode = getSavedColorMode();
  if (savedColorMode === null) {
    savedColorMode = getMediaTheme();
  }

  html.classList.add(availableThemes[savedColorMode as string]);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", e => {
      applyColorMode(e.matches ? "dark" : "light");
    });

  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", e => {
      applyColorMode(e.matches ? "light" : "dark");
    });

  useEffect(() => {
    setColorMode(savedColorMode as string);
  }, [savedColorMode]);

  const cycleToggleMode = (): void => {
    const keys = Object.keys(availableThemes);
    let index = keys.indexOf(colorMode);
    if (index === keys.length - 1) {
      index = 0;
    } else if (index >= 0) {
      index = index + 1;
    }
    const newMode = keys[index];
    applyColorMode(newMode);
    saveColorMode(newMode);
  };

  return [colorMode, cycleToggleMode];
};
