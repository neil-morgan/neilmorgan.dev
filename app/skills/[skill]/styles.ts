"use client";

import { styled } from "@/lib/stitches";

export const HeaderWrapper = styled("div", {
  display: "flex",
  gap: "$6",
  width: "100%",
  alignItems: "center",
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",

  "@lg": {
    flexDirection: "row",
  },
});

export const Body = styled("article", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "min(700px, 100%)",
  width: "100%",

  "@md": {
    maxWidth: "100%",
  },
});

export const Aside = styled("aside", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  minWidth: "360px",
  marginTop: "$10",

  "@lg": {
    marginTop: 0,
    marginLeft: "$11",
  },
});

export const Projects = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$5",
  marginTop: "$5",
  width: "100%",

  "@md": {
    flexDirection: "row",
  },

  "@lg": {
    flexDirection: "column",
  },
});