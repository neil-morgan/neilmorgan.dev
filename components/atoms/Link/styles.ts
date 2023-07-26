"use client";

import { styled } from "@/lib/stitches";

export const StyledLink = styled("a", {
  color: "$textLink",
  textDecoration: "none",
  transition: "$theme",
  "&:hover": {
    textDecoration: "underline",
  },
});
