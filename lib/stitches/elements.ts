"use client";

import { styled } from "./config";

export const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  maxWidth: "1100px",
  width: "100%",
  margin: "0 auto",
  padding: "0 20px",
});

export const Main = styled("main", {
  display: "flex",
  flex: 1,
  flexDirection: "column",
});
