"use client";

import { styled } from "@/lib/stitches";

export const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  background: "$backgroundClose",
  borderRadius: "$md",
  padding: "$5",
  alignItems: "flex-start",
});

export const Header = styled("header", {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "flex-start",
});
