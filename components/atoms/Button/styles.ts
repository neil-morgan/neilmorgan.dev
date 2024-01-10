import { styled } from "@/lib/stitches";

export const ButtonElement = styled("button", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  background: "transparent",
  transition: "$theme",
  textAlign: "center",
  border: "0",
  color: "$white",

  variants: {
    size: {
      sm: {
        fontSize: "$1",
      },
      md: {
        fontSize: "$3",
      },
      lg: {
        fontSize: "$5",
      },
    },

    link: {
      true: {
        border: 0,
      },
      false: {
        alignItems: "center",
        padding: "0 0.75em",
        height: "2em",
        borderRadius: "$default",
        letterSpacing: "0.05rem",
      },
    },

    highlight: {
      true: {
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "$border",
        "&:hover": {
          borderColor: "borderHover",
          background: "$highlightHover",
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
    highlight: true,
  },
});
