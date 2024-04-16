"use client";

import { styled } from "@/lib/stitches";

export const Wrapper = styled("div", {
  display: "flex",
  gap: "$6",
  width: "100%",
  alignItems: "center",
});

export const Body = styled("header", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  paddingRight: "$3",
});

export const TitleWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$3",
});
