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

  variants: {
    hover: {
      true: {
        "&:hover": {
          borderColor: "$borderHover",
          background: "$highlightHover",
          "& .arrow": {
            color: "$primary1",
            transform: "translate(0.4rem, -0.4rem)",
          },
        },
      },
      false: {
        borderColor: "transparent",
      },
    },
  },

  "& .arrow": {
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem",
    transition: "ease 250ms",
    color: "transparent",
    marginLeft: "auto",
    marginBottom: "auto",
    transform: "translate(0, 0)",
  },
});
