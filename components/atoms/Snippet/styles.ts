"use client";

import { styled } from "@/lib/stitches";

export const SnippetWrapper = styled("div", {
  position: "relative",
  margin: "$10 0 $9",
});

export const CodeWrapper = styled("div", {
  padding: "$4",
  margin: "0 -$6",
  background: "$backgroundClose",
  borderRadius: "$md",
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
  padding: "$2 $4 $1",
  borderTopLeftRadius: "$md",
  borderTopRightRadius: "$md",
  background: "$backgroundClose",
  transform: "translateY(-100%)",
  transition: "background 200ms ease-in-out",
  textTransform: "uppercase",
});
