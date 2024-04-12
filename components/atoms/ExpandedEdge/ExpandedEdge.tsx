"use client";

import { styled, space } from "@/lib/stitches";

export const ExpandedEdge = styled("div", {
  position: "relative",
  borderRadius: "$md",
  overflow: "hidden",

  "@md": {
    width: `calc(100% + ${space[8]})`,
    transform: `translateX(-${space[5]})`,
  },
});
