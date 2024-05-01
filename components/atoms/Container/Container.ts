"use client";

import { styled } from "@/lib/stitches";

export const Container = styled("div", {
  width: "100%",
  margin: "0 auto",
  padding: "0 $3",
  variants: {
    size: {
      page: {
        maxWidth: "1200px",
      },
    },
  },
  "@sm": {
    padding: "0 $4",
  },
  "@md": {
    padding: "0 $7",
  },

  defaultVariants: {
    size: "page",
  },
});
