import { styled } from "@/lib/stitches";

export const ButtonElement = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$buttonBackground",
  border: 0,
  padding: "$2 $4",
  borderRadius: "$default",
  fontSize: "$4",
  cursor: "pointer",
  transition: "$theme",
  letterSpacing: "0.05rem",
  textTransform: "uppercase",
  color: "$buttonColor",
  textAlign: "center",

  "&:hover": {
    background: "$buttonBackgroundHover",
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
  },

  defaultVariants: {
    size: "md",
  },
});

export const RightIcon = styled("span", {
  marginLeft: "$2",
});

export const LeftIcon = styled("span", {
  marginRight: "$2",
});
