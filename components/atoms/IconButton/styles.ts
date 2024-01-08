import { styled } from "@/lib/stitches";

export const IconButtonElement = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "transparent",
  cursor: "pointer",
  position: "relative",
  height: "2em",
  width: "2em",
  borderRadius: "$default",
  transition: "$theme",
  border: "0",
  color: "$text1",

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
