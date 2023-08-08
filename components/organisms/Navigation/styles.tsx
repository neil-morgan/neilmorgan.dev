"use client";

import { styled } from "@/lib/stitches";
import { keyframes } from "@stitches/react";
import NextLink from "next/link";
import { Content, Arrow } from "@radix-ui/react-popover";

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

export const MobileLink = styled(NextLink, {
  ...linkProps,
  display: "flex",
  fontSize: "$4",
});

export const NavigationMenuList = styled("ul", {
  display: "flex",
  justifyContent: "center",
  padding: 4,
  borderRadius: 6,
  listStyle: "none",
  margin: 0,
  gap: "$6",
});

export const NavigationMenuItem = styled("li", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

export const List = styled("ul", {
  display: "grid",
  margin: 0,
  padding: "$5",
  gap: "$6",
  listStyle: "none",
  gridTemplateColumns: "1fr 1fr",
});

export const ListItemLink = styled(NextLink, {
  display: "block",
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

export const ListItemHeading = styled("div", {
  fontWeight: 500,
  lineHeight: 1.2,
  color: "inherit",
});

export const ListItemText = styled("p", {
  all: "unset",
  color: "inherit",
  lineHeight: 1.4,
  marginTop: "$4",
  fontWeight: "initial",
});

export const PopoverButton = styled("button", {
  all: "unset",
  color: "$navItem",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: "$6",
  cursor: "pointer",
  width: "$6",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": { color: "$navItemHover" },
  "&:focus": { color: "$navItemHover" },
});

export const PopoverArrow = styled(Arrow, {
  fill: "$backgroundClose",
});

export const PopoverWrapper = styled(Content, {
  width: "100%",
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
  minWidth: "200px",
  backgroundColor: "$backgroundClose",
});

export const PopoverBody = styled("ul", {
  display: "grid",
  margin: 0,
  padding: "$5",
  listStyle: "none",

  variants: {
    columns: {
      "1": {
        gridTemplateColumns: "1fr",
        gap: "$3",
      },
      2: {
        gridTemplateColumns: "1fr 1fr",
        gap: "$6",
      },
    },
  },

  defaultVariants: {
    columns: "1",
  },
});

export const PopoverHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  padding: "$4",
  borderBottom: "1px solid $divider",
});

export const PopoverFooter = styled("footer", {
  display: "flex",
  justifyContent: "flex-end",
  padding: "$4",
  borderTop: "1px solid $divider",
  color: "$base1",
});

export const MobileList = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  marginLeft: "$4",
  "&:not(:last-child)": { marginBottom: "$2" },
});
