"use client";

import { keyframes } from "@stitches/react";
import NextLink from "next/link";
import { Content, Arrow } from "@radix-ui/react-popover";
import { styled } from "@/lib/stitches";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const HeaderElement = styled("header", {
  display: "flex",
  alignItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 100,
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

export const PopoverArrow = styled(Arrow, {
  fill: "$backgroundClose",
});

export const PopoverWrapper = styled(Content, {
  width: "100%",
  zIndex: "200",
  padding: "0 $2",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
});

export const PopoverContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  borderRadius: "$default",
  width: "100%",
  boxShadow: "$default",
  minWidth: "180px",
  backgroundColor: "$backgroundClose",
});

export const PopoverSection = styled("div", {
  display: "grid",
  margin: 0,
  padding: "$4 $5",
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

const linkProps = {
  outline: "none",
  userSelect: "none",
  color: "$navItem",
  transition: "$theme",
  "&:hover": { color: "$navItemHover" },
  "&:focus": { color: "$navItemHover" },
};

export const DesktopLink = styled(NextLink, {
  ...linkProps,
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  fontSize: "$3",
  lineHeight: 1,
  height: "100%",
});

export const DesktopList = styled("ul", {
  display: "flex",
  justifyContent: "center",
  listStyle: "none",
  marginRight: "auto",
  marginLeft: "$8",
  gap: "$6",
});

export const DesktopItem = styled("li", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

export const DesktopItemLink = styled(NextLink, {
  display: "flex",
  flexDirection: "column",
  outline: "none",
  textDecoration: "none",
  userSelect: "none",
  color: "$navItem",
  lineHeight: 1,
  cursor: "pointer",
  transition: "$theme",
  "&:hover": { color: "$navItemHover" },
  "&:focus": { color: "$navItemHover" },
});

export const DesktopItemHeading = styled("div", {
  display: "flex",
  fontWeight: 500,
  lineHeight: 1.2,
  color: "inherit",
});

export const DesktopItemText = styled("p", {
  all: "unset",
  color: "inherit",
  lineHeight: 1.4,
  marginTop: "$2",
  fontSize: "$2",
  fontWeight: "initial",
  maxWidth: "300px",
});

export const MobileLink = styled(NextLink, {
  ...linkProps,
  display: "flex",
  fontSize: "$4",
});

export const MobileList = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  fontSize: "$3",
  marginLeft: "$4",
  marginTop: "$4",
});

export const MobileListItem = styled(NextLink, {
  ...linkProps,
  display: "flex",
});
