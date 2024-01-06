import { styled } from "@/lib/stitches";

export const IconButtonElement = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "rgba(255,255,255,0.05)",
  background: "transparent",
  cursor: "pointer",
  position: "relative",
  height: "1.75em",
  width: "1.75em",
  borderRadius: "$default",
  transition: "$theme",

  "&:hover": {
    borderColor: "rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.04)",
  },

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
    priority: {
      default: {
        background: "$layer4",
        border: "solid 1px $layer5",
        color: "$text2",
        "&:hover": {
          background: "$layer5",
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
        color: "$text1",
      },
    },
  },

  defaultVariants: {
    size: "md",
    priority: "default",
  },
});
