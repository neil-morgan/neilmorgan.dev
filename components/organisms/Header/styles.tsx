"use client";

import { styled } from "@/lib/stitches";

export const HeaderElement = styled("header", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: "$3 0",
  marginBottom: "$6",

  "@sm": {
    padding: "$4 0",
  },
  "@md": {
    padding: "$6 0",
    marginBottom: "$8",
  },
});

export const DesktopNavList = styled("ul", {
  display: "flex",
  justifyContent: "center",
  listStyle: "none",
  marginLeft: "$4",
  gap: "$4",
});
