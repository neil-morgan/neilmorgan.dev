import Link from "next/link";
import { styled } from "@/lib/stitches";

export const DraftModeToggle = styled("div", {
  display: "flex",
  position: "fixed",
  alignItems: "center",
  top: "$2",
  right: "$2",
  padding: "$1 $2",
  color: "$primary8",
  zIndex: 1000,
  fontSize: "12px",
});

export const DraftModeToggleButton = styled(Link, {
  display: "flex",
  padding: "$1",
  borderRadius: "50%",
  backgroundColor: "$buttonPrimaryBackground",
  color: "$buttonPrimaryColor",
  marginLeft: "$2",
  fontSize: "12px",
  transition: "$theme",
  "&:hover": {
    backgroundColor: "$buttonPrimaryBackgroundHover",
  },
});
