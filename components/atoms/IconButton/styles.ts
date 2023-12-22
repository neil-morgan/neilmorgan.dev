import { styled } from "@/lib/stitches";

export const IconButtonElement = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: 0,
  background: "transparent",
  cursor: "pointer",
  position: "relative",
  height: "1.75em",
  width: "1.75em",

  borderRadius: "$default",
  transition: "$theme",

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
