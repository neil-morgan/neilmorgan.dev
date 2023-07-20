"use client";

import { styled } from "@/lib/stitches";

export const Article = styled("article", {
  maxWidth: "min(686px, 100%)",
  "& > *:first-child": {
    marginTop: 0,
  },
});
