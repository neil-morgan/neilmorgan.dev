"use client";

import { styled } from "@/lib/stitches";

export const AspectIframeContainer = styled("div", {
  position: "relative",
  width: "100%",
  borderRadius: "$md",
  overflow: "hidden",
});

export const Iframe = styled("iframe", {
  border: 0,
});
