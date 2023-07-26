"use client";

import { styled } from "@/lib/stitches";

export const TagElement = styled("div", {
  borderRadius: "$default",
  padding: "$1 $2",
  fontSize: "$2",
  transition: "$theme",
  cursor: "pointer",

  variants: {
    priority: {
      primary: {
        background: "$buttonPrimaryBackground",
        color: "$buttonPrimaryColor",
        "&:hover": {
          background: "$buttonPrimaryBackgroundHover",
        },
      },
      secondary: {
        background: "$buttonSecondaryBackground",
        color: "$buttonSecondaryColor",
        "&:hover": {
          background: "$buttonSecondaryBackgroundHover",
        },
      },
    },
  },

  defaultVariants: {
    priority: "secondary",
  },
});
