"use client";

import { styled } from "@/lib/stitches";

export const Divider = styled("hr", {
  width: "100%",
  border: "solid 1px $divider",
  transition: "$theme",
  variants: {
    size: {
      xs: {
        margin: "$2 0",
      },
      sm: {
        margin: "$4 0",
      },
      md: {
        margin: "$6 0",
      },
      lg: {
        margin: "$8 0",
      },
      xl: {
        margin: "$10 0",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
