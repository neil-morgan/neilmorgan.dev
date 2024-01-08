import { styled } from "@/lib/stitches";

export const ButtonElement = styled("button", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "$theme",
  textAlign: "center",
  border: "0",

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
        borderColor: "rgba(255,255,255,0.05)",
        "&:hover": {
          borderColor: "rgba(255,255,255,0.2)",
          background: "rgba(255,255,255,0.04)",
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
    highlight: true,
  },
});
