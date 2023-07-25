"use client";

import { styled } from "@/lib/stitches";

export const TagElement = styled("div", {
  borderRadius: "$md",
  padding: "$1 $2",
  fontSize: "$2",
  border: "1px solid $primary",
  transition: "$theme",
  "&:hover": {
    background: "$primary",
    color: "$buttonColor",
  },
});
