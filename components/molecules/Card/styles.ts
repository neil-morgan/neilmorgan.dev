import { styled } from "@/lib/stitches";

export const Wrapper = styled("a", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  borderRadius: "$md",
  background: "transparent",
  padding: "$4",
  transition: "250ms ease",
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "$border",
  position: "relative",
  color: "$text",

  "& svg": {
    transition: "ease 250ms",
    color: "transparent",
  },

  "&:hover": {
    borderColor: "$borderHover",
    background: "$highlightHover",
    "& svg": {
      color: "$primary1",
      transform: "translate(5px, -5px)",
    },

    "& h3": {
      color: "$primary1",
    },
  },
});

export const Header = styled("header", {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "$3",
  gap: "$2",
  color: "$white",
});

export const Footer = styled("footer", {
  display: "flex",
  marginTop: "$4",
  gap: "$4",
});
