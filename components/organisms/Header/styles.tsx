"use client";

import { styled } from "@/lib/stitches";

export const linkProps = {
  outline: "none",
  userSelect: "none",
  color: "$navItem",
  transition: "$theme",
  "&:hover": { color: "$navItemHover" },
  "&:focus": { color: "$navItemHover" },
};

export const HeaderElement = styled("header", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: "$2 0",
  marginBottom: "$10",
  backgroundColor: "$backgroundFar",
  transition: "$theme",
  "@sm": {
    padding: "$4 0",
  },
  "@md": {
    padding: "$6 0",
  },
});

export const HeaderContent = styled("nav", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const PopoverButton = styled("button", {
  all: "unset",
  color: "$navItem",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: "$4",
  cursor: "pointer",
  width: "$6",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "$theme",
  "&:hover": { color: "$navItemHover" },
  "&:focus": { color: "$navItemHover" },
});

export const PopoverSection = styled("div", {
  display: "grid",
  margin: 0,
  padding: "$5",
  listStyle: "none",
  variants: {
    columns: {
      "1": {
        gridTemplateColumns: "1fr",
      },
      2: {
        gridTemplateColumns: "1fr 1fr",
        gap: "$6",
      },
    },
    gap: {
      mobile: {
        gap: "$5",
      },
    },
  },
  defaultVariants: {
    columns: "1",
  },
});
