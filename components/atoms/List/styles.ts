"use client";

import { styled } from "@/lib/stitches";

export const Element = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  variants: {
    format: {
      numbers: {
        listStyleType: "decimal",
      },
      bullets: {
        listStyleType: "disc",
      },
    },
  },
});
