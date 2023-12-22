"use client";

import { styled } from "@/lib/stitches";

export const Blockquote = styled("blockquote", {
  display: "flex",
  background: "$layer3",
  padding: "$4",
  borderRadius: "$md",
  borderLeftWidth: "$sm",
  borderLeftStyle: "solid",
  borderLeftColor: "$primary2",
  transition: "background-color $theme",
});
