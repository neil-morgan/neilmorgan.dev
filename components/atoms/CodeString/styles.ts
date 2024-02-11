"use client";

import { styled } from "@/lib/stitches";

export const CodeStringElement = styled("code", {
  position: "relative",
  color: "$secondary1",
  background: "$layer3",
  borderRadius: "$sm",
  padding: "0.05rem 0.4rem 0.2rem",
  letterSpacing:"-0.025rem",
  fontFamily: "var(--font-fira-mono)",
});
