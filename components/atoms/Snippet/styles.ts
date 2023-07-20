"use client";

import { styled } from "@/lib/stitches";

export const SnippetWrapper = styled("div", {
  position: "relative",
  margin: "$10 0 $9",
});

export const CodeWrapper = styled("div", {
  padding: "$4",
  margin: "0 -$6",
  background: "$closeBackground",
  borderRadius: "$xl",
  transition: "200ms ease-in-out",
  "& code, pre ": {
    background: "transparent !important",
  },
});

export const LanguageTab = styled("div", {
  position: "absolute",
  top: "0",
  fontSize: "$2",
  right: "$6",
  padding: "$1 $3",
  borderTopLeftRadius: "$lg",
  borderTopRightRadius: "$lg",
  background: "$closeBackground",
  transform: "translateY(-100%)",
  transition: "background 200ms ease-in-out",
  textTransform: "uppercase",
});
