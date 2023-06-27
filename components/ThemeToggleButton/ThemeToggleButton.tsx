"use client"

import { ThemeToggleContext } from "@/lib/stitches/ThemeToggleProvider/ThemeToggleProvider";

export const ThemeToggleButton = () => {
  return (
    <ThemeToggleContext.Consumer>
      {(context: any) => (
        <button onClick={context.cycleToggleMode}>
          Mode: {context.colorMode}
        </button>
      )}
    </ThemeToggleContext.Consumer>
  );
};
