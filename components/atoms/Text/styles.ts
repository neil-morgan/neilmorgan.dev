import { styled } from "@/lib/stitches";

export const TextElement = styled("div", {
  color: "$text",
  
  variants: {
    size: {
      xs: {
        fontSize: "$1",
      },
      sm: {
        fontSize: "$2",
      },
      md: {
        fontSize: "$3",
      },
      lg: {
        fontSize: "$4",
      },
      xl: {
        fontSize: "$5",
      },
    },

    style: {
      p: {
        "&:not(:first-child)": {
          marginTop: "$4",
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
});