import { styled } from "@/lib/stitches";

export const IconButtonElement = styled("button", {
  border: 0,
  background: "transparent",
  cursor: "pointer",
  position: "relative",
  height: "1.75em",
  width: "1.75em",
  padding: "0.3em",
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
      primary: {
        background: "$buttonPrimaryBackground",
        color: "$buttonPrimaryColor",
        "&:hover": {
          background: "$buttonPrimaryBackgroundHover",
        },
      },
      secondary: {
        background: "$buttonSecondaryBackground",
        color: "$buttonSecondaryColor",
        "&:hover": {
          background: "$buttonSecondaryBackgroundHover",
        },
      },
      nav: {
        background: "transparent",
        color: "$navItem",
        "&:hover": {
          color: "$navItemHover",
        },
      },
    },
  },

  defaultVariants: {
    size: "md",
    priority: "primary",
  },
});
