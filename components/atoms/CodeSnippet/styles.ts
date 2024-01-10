"use client";

import { styled } from "@/lib/stitches";

const background = "$layer3";

export const SnippetWrapper = styled("div", {
  position: "relative",
});

export const CodeWrapper = styled("div", {
  padding: "$7",
  width: "100%",
  background,
  transition: "200ms ease-in-out",
  "& code, pre ": {
    background: "transparent !important",
    padding: "0 !important",
  },
  "@sm": {
    borderRadius: "$md",
  },
});

export const LanguageTab = styled("div", {
  position: "absolute",
  top: "1px",
  fontSize: "$2",
  right: "$7",
  color: "$white",
  padding: "$2 $4 $1",
  borderTopLeftRadius: "$md",
  borderTopRightRadius: "$md",
  background,
  transform: "translateY(-100%)",
  transition: "background 200ms ease-in-out",
  textTransform: "uppercase",
  pointerEvents: "none",
});
