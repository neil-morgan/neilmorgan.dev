"use client";

import { Root } from "@radix-ui/react-separator";
import { styled } from "@/lib/stitches";

export const VerticalSeparator = styled(Root, {
  backgroundColor: "$divider",
  height: "100%",
  width: "1px",
  variants: {
    spacing: {
      1: {
        margin: "0 $2",
      },
      2: {
        margin: "0 $4",
      },
      3: {
        margin: "0 $6",
      },
      4: {
        margin: "0 $8",
      },
    },
  },
  defaultVariants: {
    spacing: 1,
  },
});

export const HorizontalSeparator = styled(Root, {
  backgroundColor: "$divider",
  height: "1px",
  width: "100%",
  variants: {
    spacing: {
      1: {
        margin: "$2 0",
      },
      2: {
        margin: "$3 0",
      },
      3: {
        margin: "$4 0",
      },
      4: {
        margin: "$5 0",
      },
    },
  },
});
