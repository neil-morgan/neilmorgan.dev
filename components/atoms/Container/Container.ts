"use client";

import { styled } from "@/lib/stitches";

export const Container = styled("div", {
  width: "100%",
  margin: "0 auto",
  variants: {
    size: {
      page: {
        maxWidth: "1100px",
      },
    },
  },
  defaultVariants: {
    size: "page",
  },
});
