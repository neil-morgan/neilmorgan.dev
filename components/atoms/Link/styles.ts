"use client";

import { styled } from "@/lib/stitches";

export const StyledLink = styled("a", {
  color: "$link",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});
