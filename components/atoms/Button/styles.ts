import { styled } from "@/lib/stitches";

export const ButtonElement = styled("button", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: 0,
  padding: "$2 $4",
  borderRadius: "$default",
  fontSize: "$4",
  cursor: "pointer",
  transition: "$theme",
  letterSpacing: "0.05rem",
  textTransform: "uppercase",
  textAlign: "center",

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

export const RightIcon = styled("span", {
  marginLeft: "$2",
});

export const LeftIcon = styled("span", {
  marginRight: "$2",
});
