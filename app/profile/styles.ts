"use client";

import { styled } from "@/lib/stitches";

export const Introduction = styled("div", {
  display: "flex",
  gap: "$8",
  flexDirection: "column",
  alignItems: "center",

  "@md": {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: "$6",
  },

  "@lg": {
    gap: "$8",
  },
});
