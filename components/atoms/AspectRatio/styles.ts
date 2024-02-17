"use client";

import { styled } from "@/lib/stitches";

export const AspectRatioElement = styled("div", {
  width: "100%",
  position: "relative",
  variants: {
    rounded: {
      true: {
        overflow: "hidden",
        borderRadius: "$md",
      },
    },
  },
});
