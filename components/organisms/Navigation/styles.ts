"use client";

import { styled } from "@/lib/stitches";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { keyframes } from "@stitches/react";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { violet, mauve, indigo, purple, blackA } from "@radix-ui/colors";

const enterFromRight = keyframes({
  from: { transform: "translateX(200px)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1 },
});

const enterFromLeft = keyframes({
  from: { transform: "translateX(-200px)", opacity: 0 },
  to: { transform: "translateX(0)", opacity: 1 },
});

const exitToRight = keyframes({
  from: { transform: "translateX(0)", opacity: 1 },
  to: { transform: "translateX(200px)", opacity: 0 },
});

const exitToLeft = keyframes({
  from: { transform: "translateX(0)", opacity: 1 },
  to: { transform: "translateX(-200px)", opacity: 0 },
});

const scaleIn = keyframes({
  from: { transform: "rotateX(-30deg) scale(0.9)", opacity: 0 },
  to: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
});

const scaleOut = keyframes({
  from: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
  to: { transform: "rotateX(-10deg) scale(0.95)", opacity: 0 },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const itemStyles = {
  padding: "8px 12px",
  outline: "none",
  userSelect: "none",
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 15,
  color: violet.violet11,
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` },
  "&:hover": { backgroundColor: violet.violet3 },
};

export const NavigationMenuRoot = styled(NavigationMenu.Root, {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  width: "100vw",
  zIndex: 1,
});

export const NavigationMenuList = styled(NavigationMenu.List, {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "white",
  padding: 4,
  borderRadius: 6,
  listStyle: "none",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  margin: 0,
});

export const NavigationMenuTrigger = styled(NavigationMenu.Trigger, {
  all: "unset",
  ...itemStyles,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,
});

export const NavigationMenuLink = styled(NavigationMenu.Link, {
  ...itemStyles,
  display: "block",
  textDecoration: "none",
  fontSize: 15,
  lineHeight: 1,
});

export const NavigationMenuContent = styled(NavigationMenu.Content, {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  "@media only screen and (min-width: 600px)": { width: "auto" },
  animationDuration: "250ms",
  animationTimingFunction: "ease",
  '&[data-motion="from-start"]': { animationName: enterFromLeft },
  '&[data-motion="from-end"]': { animationName: enterFromRight },
  '&[data-motion="to-start"]': { animationName: exitToLeft },
  '&[data-motion="to-end"]': { animationName: exitToRight },
});

export const NavigationMenuIndicator = styled(NavigationMenu.Indicator, {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  height: 10,
  top: "100%",
  overflow: "hidden",
  zIndex: 1,
  transition: "width, transform 250ms ease",
  '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
  '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
});

export const NavigationMenuViewport = styled(NavigationMenu.Viewport, {
  position: "relative",
  transformOrigin: "top center",
  marginTop: 10,
  width: "100%",
  backgroundColor: "white",
  borderRadius: 6,
  overflow: "hidden",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  height: "var(--radix-navigation-menu-viewport-height)",
  transition: "width, height, 300ms ease",
  '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
  '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  "@media only screen and (min-width: 600px)": {
    width: "var(--radix-navigation-menu-viewport-width)",
  },
});

export const List = styled("ul", {
  display: "grid",
  padding: 22,
  margin: 0,
  columnGap: 10,
  listStyle: "none",
  variants: {
    layout: {
      one: {
        "@media only screen and (min-width: 600px)": {
          width: 500,
          gridTemplateColumns: ".75fr 1fr",
        },
      },
      two: {
        "@media only screen and (min-width: 600px)": {
          width: 600,
          gridAutoFlow: "column",
          gridTemplateRows: "repeat(3, 1fr)",
        },
      },
    },
  },
  defaultVariants: {
    layout: "one",
  },
});

export const ListItemLink = styled("a", {
  display: "block",
  outline: "none",
  textDecoration: "none",
  userSelect: "none",
  padding: 12,
  borderRadius: 6,
  fontSize: 15,
  lineHeight: 1,
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` },
  "&:hover": { backgroundColor: mauve.mauve3 },
});

export const ListItemHeading = styled("div", {
  fontWeight: 500,
  lineHeight: 1.2,
  marginBottom: 5,
  color: violet.violet12,
});

export const ListItemText = styled("p", {
  all: "unset",
  color: mauve.mauve11,
  lineHeight: 1.4,
  fontWeight: "initial",
});

export const Callout = styled("a", {
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  background: `linear-gradient(135deg, ${purple.purple9} 0%, ${indigo.indigo9} 100%);`,
  borderRadius: 6,
  padding: 25,
  textDecoration: "none",
  outline: "none",
  userSelect: "none",
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

export const CalloutHeading = styled("div", {
  color: "white",
  fontSize: 18,
  fontWeight: 500,
  lineHeight: 1.2,
  marginTop: 16,
  marginBottom: 7,
});

export const CalloutText = styled("p", {
  all: "unset",
  color: mauve.mauve4,
  fontSize: 14,
  lineHeight: 1.3,
});

export const ViewportPosition = styled("div", {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  top: "100%",
  left: 0,
  perspective: "2000px",
});

export const CaretDown = styled(CaretDownIcon, {
  position: "relative",
  color: violet.violet10,
  top: 1,
  transition: "transform 250ms ease",
  "[data-state=open] &": { transform: "rotate(-180deg)" },
});

export const Arrow = styled("div", {
  position: "relative",
  top: "70%",
  backgroundColor: "white",
  width: 10,
  height: 10,
  transform: "rotate(45deg)",
  borderTopLeftRadius: 2,
});
