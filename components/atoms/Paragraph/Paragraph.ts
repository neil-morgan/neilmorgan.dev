"use client";

import { styled } from "@/lib/stitches";

export const Paragraph = styled("p", {
  variants: {
    size: {
      sm: { fontSize: "$2" },
      md: { fontSize: "$3" },
      lg: { fontSize: "$4" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
