"use client";

import { styled } from "@/lib/stitches";

export const ExpandedEdge = styled("div", {
  position: "relative",
  margin: "$10 -$1",
  borderRadius: "$md",
  overflow: "hidden",
  "@md": {
    margin: "$10 -$7",
  },
});
