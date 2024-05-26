"use client";

import { styled } from "@/lib/stitches";

export const Wrapper = styled("nav", {
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "repeat(2, 1fr)",

  "@lg": {
    display: "none",
  },
});
