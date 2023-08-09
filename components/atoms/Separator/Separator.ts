"use client";

import { Root } from "@radix-ui/react-separator";
import { styled } from "@/lib/stitches";

export const VerticalSeparator = styled(Root, {
  backgroundColor: "$divider",
  height: "100%",
  width: "1px",
  variants: {
    size: {
      xs: {
        margin: "0 $2",
      },
      sm: {
        margin: "0 $4",
      },
      md: {
        margin: "0 $6",
      },
      lg: {
        margin: "0 $8",
      },
      xl: {
        margin: "$0 10",
      },
    },
  },
});

export const HorizontalSeparator = styled(Root, {
  backgroundColor: "$divider",
  height: "1px",
  width: "100%",
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
});
