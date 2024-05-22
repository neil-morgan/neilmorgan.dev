import { styled } from "@/lib/stitches";

export const Wrapper = styled("a", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  borderRadius: "$md",
  background: "transparent",
  padding: "$4",
  gap: "$4",
  transition: "250ms ease",
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "$border",
  color: "$text",

  "& svg": {
    position: "absolute",
    top: "5px",
    right: "5px",
    transition: "ease 250ms",
    color: "transparent",
    marginLeft: "auto",
    marginBottom: "auto",
    transform: "translate(0, 0)",
  },

  "&:hover": {
    borderColor: "$borderHover",
    background: "$highlightHover",
    "& svg": {
      color: "$primary1",
      transform: "translate(4px, -4px)",
    },
  },
});
