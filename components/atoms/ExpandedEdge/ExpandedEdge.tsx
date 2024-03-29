"use client";

import { styled } from "@/lib/stitches";

export const ExpandedEdge = styled("div", {
  position: "relative",
  marginLeft: "$-1",
  marginRight: "$-1",
  borderRadius: "$md",
  overflow: "hidden",
  "@md": {
    marginLeft: "$-7",
    marginRight: "$-7",
  },
});
