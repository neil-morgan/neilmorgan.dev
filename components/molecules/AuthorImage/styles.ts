"use client";

import { styled } from "@/lib/stitches";

export const AuthorImageWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$layer3",

  borderRadius: "100%",
  position: "relative",
  color: "$secondary1",
  overflow: "hidden",

  variants: {
    size: {
      sm: { height: "$7", width: "$7" },
      md: { height: "$8", width: "$8" },
      lg: { height: "$9", width: "$9" },
    },
  },
});
