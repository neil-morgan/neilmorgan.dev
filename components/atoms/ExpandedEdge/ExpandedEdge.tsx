"use client";

import { styled } from "@/lib/stitches";

export const ExpandedEdge = styled("div", {
  position: "relative",
  margin: "$10 -$7 $9",
  overflow: "hidden",
  "@md": {
    borderRadius: "$md",
  },
});
