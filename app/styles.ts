"use client";

import { styled } from "@/lib/stitches";

export const Wrapper = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  margin: "0 auto",
  transition: "$theme",
});

export const Main = styled("main", {
  display: "flex",
  flex: 1,
  flexDirection: "column",
});
