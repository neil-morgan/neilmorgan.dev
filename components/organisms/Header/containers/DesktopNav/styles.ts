"use client";

import NextLink from "next/link";
import { linkProps } from "../../styles";
import { styled } from "@/lib/stitches";

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
  gridColumn: "2 / 5",
  gap: "$6",
});

export const DesktopItem = styled("li", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

export const DesktopItemLink = styled(NextLink, {
  ...linkProps,
  display: "flex",
  flexDirection: "column",
  outline: "none",
  textDecoration: "none",
  lineHeight: 1,
  cursor: "pointer",
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
