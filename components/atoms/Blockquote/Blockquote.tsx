"use client";

import { styled } from "@/lib/stitches";

export const Blockquote = styled("blockquote", {
  display: "flex",
  "&:not(:first-child)": {
    marginTop: "$6",
  },
  "&:not(:last-child)": {
    marginBottom: "$6",
  },

  background: "$closeBackground",
  padding: "$4",
  borderRadius: "$md",
  borderLeftWidth: "$sm",
  borderLeftStyle: "solid",
  borderLeftColor: "$primary",
});
