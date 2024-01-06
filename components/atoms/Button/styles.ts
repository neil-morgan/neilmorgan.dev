import { styled } from "@/lib/stitches";

export const ButtonElement = styled("button", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "rgba(255,255,255,0.05)",
  padding: "$2 $4",
  borderRadius: "$default",
  fontSize: "$4",
  cursor: "pointer",
  transition: "$theme",
  letterSpacing: "0.05rem",
  textAlign: "center",

  "&:hover": {
    borderColor: "rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.04)",
  },

  variants: {
    size: {
      sm: {
        fontSize: "$1",
        fontWeight: "$semibold",
      },
      md: {
        fontSize: "$3",
      },
      lg: {
        fontSize: "$5",
      },
    },

    priority: {
      default: {
        background: "$layer5",
        color: "$text2",
        "&:hover": {
          background: "$layer6",
        },
      },
      primary: {
        background: "$primary1",
        color: "$base1 ",
        "&:hover": {
          background: "$primary2",
        },
      },
      contrast: {
        background: "transparent",
        color: "$text3",
        "&:hover": {
          color: "$text1",
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
    priority: "default",
  },
});
