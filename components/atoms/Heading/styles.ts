import { styled } from "@stitches/react";

export const defaultStyles = {};

export const HeadingElement = styled("h2", {
  position: "relative",
  lineHeight: "$heading",
  color: "$text",
  "&:hover": { "& a": { opacity: 1 } },

  variants: {
    size: {
      primary: {
        fontWeight: "$semibold",
        fontSize: "$11",
        marginTop: "$11",
      },
      secondary: {
        fontWeight: "$medium",
        fontSize: "$7",
        marginTop: "$6",
      },
      tertiary: {
        fontWeight: "$medium",
        fontSize: "$3",
        letterSpacing: "$widest",
        textTransform: "uppercase",
      },
    },
  },

  defaultVariants: {
    size: "primary",
  },
});

export const HeadingAnchor = styled("a", {
  "&:hover": { opacity: 1 },
  bottom: "0",
  color: "inherit",
  fontSize: "inherit",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  left: "0",
  $my: "auto",
  opacity: "0",
  position: "absolute",
  top: "0",
  transform: "translateX(-150%)",
  transition: "ease 250ms",
  scrollMarginTop: "$10",
});
