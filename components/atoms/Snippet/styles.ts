"use client";

import { styled } from "@/lib/stitches";

export const SnippetWrapper = styled("div", {
  position: "relative",
});

export const CodeWrapper = styled("div", {
  padding: "$7",
  width: "100%",
  background: "$backgroundClose",
  borderRadius: "$md",
  transition: "200ms ease-in-out",
  "& code, pre ": {
    background: "transparent !important",
    padding: "0 !important",
  },
});

export const LanguageTab = styled("div", {
  position: "absolute",
  top: "0",
  fontSize: "$2",
  right: "$7",
  padding: "$2 $4 $1",
  borderTopLeftRadius: "$md",
  borderTopRightRadius: "$md",
  background: "$backgroundClose",
  transform: "translateY(-100%)",
  transition: "background 200ms ease-in-out",
  textTransform: "uppercase",
  pointerEvents: "none",
});
