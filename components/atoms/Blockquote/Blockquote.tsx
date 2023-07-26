"use client";

import { styled } from "@/lib/stitches";

export const Blockquote = styled("blockquote", {
  display: "flex",
  background: "$backgroundClose",
  padding: "$4",
  borderRadius: "$md",
  borderLeftWidth: "$sm",
  borderLeftStyle: "solid",
  borderLeftColor: "$primary8",
  transition: "background-color $theme",
});
