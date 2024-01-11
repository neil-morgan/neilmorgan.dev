"use client";

import { useState, useEffect, type ReactNode } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { createStitches } from "@stitches/react";
import { globalStyles } from "@/lib/stitches";

export const StitchesRegistryProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const { getCssText } = createStitches();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useServerInsertedHTML(() => {
    if (!isMounted) {
      setIsMounted(true);
      globalStyles();

      return (
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      );
    }
  });

  return isMounted ? <>{children}</> : null;
};
