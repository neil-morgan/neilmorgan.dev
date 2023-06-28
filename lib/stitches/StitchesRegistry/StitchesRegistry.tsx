"use client";

import { useState, type ReactNode } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { createStitches } from "@stitches/react";
import { globalStyles } from "../config";

export const StitchesRegistry = ({ children }: { children: ReactNode }) => {
  const [isRendered, setIsRendered] = useState(false);
  const { getCssText } = createStitches();

  useServerInsertedHTML(() => {
    if (!isRendered) {
      setIsRendered(true);
      globalStyles();

      return (
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      );
    }
  });

  return <>{children}</>;
};
