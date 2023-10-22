"use client";

import { styled } from "@/lib/stitches";

export const Wrapper = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  margin: "0 auto",
  padding: "0 $2",
  background: "$layer2",
  transition: "$theme",

  "@sm": {
    padding: "0 $4",
  },

  "@md": {
    padding: "0 $7",
  },
});

export const Main = styled("main", {
  display: "flex",
  flex: 1,
  flexDirection: "column",
});
