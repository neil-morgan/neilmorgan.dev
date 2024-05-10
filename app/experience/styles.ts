"use client";

import { styled } from "@/lib/stitches";

export const Actions = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  columnGap: "$6",
  rowGap: "$6",
  padding: "0 $8",

  "@sm": {
    padding: "0",
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@md": {
    padding: "0 $6",
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@lg": {
    padding: "0 $8",
    gridTemplateColumns: "repeat(4, 1fr)",
    justifyItems: "center",
  },
});
