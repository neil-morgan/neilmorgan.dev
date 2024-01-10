"use client";

import { styled } from "@/lib/stitches";

export const HeaderElement = styled("header", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: "$2 0",
  marginBottom: "$10",

  "@sm": {
    padding: "$4 0",
  },
  "@md": {
    padding: "$6 0",
  },
});
