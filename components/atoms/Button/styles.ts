import { styled } from "@/lib/stitches";

export const ButtonElement = styled("button", {
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  background: "transparent",
  transition: "$theme",
  textAlign: "center",
  border: "0",
  color: "$white",

  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: "none",
      },
    },

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
      xl: {
        fontSize: "$7",
      },
    },

    asLink: {
      true: {
        border: 0,
      },
      false: {
        alignItems: "center",
        padding: "0 1em",
        height: "2.75em",
        borderRadius: "$default",
        letterSpacing: "0.05rem",
      },
    },

    highlight: {
      true: {
        border: "solid 2px $border",
        "&:hover": {
          borderColor: "$borderHover",
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
