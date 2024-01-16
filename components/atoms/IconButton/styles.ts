import { styled } from "@/lib/stitches";

export const IconButtonElement = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "transparent",
  cursor: "pointer",
  position: "relative",
  height: "2.75em",
  width: "2.75em",
  borderRadius: "$default",
  transition: "$theme",
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

    highlight: {
      true: {
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "$border",
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
