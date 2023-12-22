"use client";

import { styled } from "@/lib/stitches";

export const StyledLink = styled("a", {
  color: "$primary2",
  textDecoration: "none",
  fontWeight: "$medium",
  transition: "$theme",
  "&:hover": {
    textDecoration: "underline",
  },
});
