"use client";

import { styled } from "@/lib/stitches";

export const Blockquote = styled("blockquote", {
  display: "flex",
  background: "$closeBackground",
  padding: "$4",
  borderRadius: "$md",
  borderLeftWidth: "$sm",
  borderLeftStyle: "solid",
  borderLeftColor: "$primary",
});
