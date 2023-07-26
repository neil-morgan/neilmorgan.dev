import { styled } from "@/lib/stitches";

export const ButtonElement = styled("button", {
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
    },
  },

  defaultVariants: {
    size: "md",
    priority: "primary",
  },
});

export const RightIcon = styled("span", {
  marginLeft: "$2",
});

export const LeftIcon = styled("span", {
  marginRight: "$2",
});
