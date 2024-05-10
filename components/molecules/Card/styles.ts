import { styled } from "@/lib/stitches";

export const Wrapper = styled("a", {
  display: "flex",
  borderRadius: "$md",
  background: "transparent",
  padding: "$4",
  gap: "$4",
  transition: "250ms ease",
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "$border",
  position: "relative",
  color: "$text",

  "& svg": {
    transition: "ease 250ms",
    color: "transparent",
    marginLeft: "auto",
    marginBottom: "auto",
  },

  "&:hover": {
    borderColor: "$borderHover",
    background: "$highlightHover",
    "& svg": {
      color: "$primary1",
      transform: "translate(5px, -5px)",
    },
  },
});

export const ContentBody = styled("div", {
  display: "flex",
  gap: "$3",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const ContentImage = styled("div", {
  display: "flex",
  maxWidth: "60px",
  minWidth: "60px",
  alignItems: "flex-start",
  alignSelf: "flex-start",
});

export const Header = styled("header", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  gap: "$4",
  color: "$white",
});

export const Footer = styled("footer", {
  display: "flex",
  gap: "$4",
});
