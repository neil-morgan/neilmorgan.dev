import { styled } from "@/lib/stitches";
import Link from "next/link";

export const DraftModeWrapper = styled("div", {
  position: "absolute",
  inset: 0,
  border: "1px solid $primary",
});

export const DraftModeToggle = styled("div", {
  display: "flex",
  position: "absolute",
  alignItems: "center",
  bottom: "$2",
  right: "$2",
  padding: "$1 $2",
  color: "$primary",
  zIndex: 1000,
  fontSize: "12px",
});

export const DraftModeToggleButton = styled(Link, {
  display: "flex",
  padding: "$1",
  borderRadius: "50%",
  backgroundColor: "$buttonBackground",
  color: "#000000",
  marginLeft: "$2",
  fontSize: "12px",
  transition: "$theme",
  "&:hover": {
    backgroundColor: "$buttonBackgroundHover",
  },
});
