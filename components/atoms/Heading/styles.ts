import { styled } from "@stitches/react";

export const defaultStyles = {};

export const HeadingElement = styled("h2", {
  position: "relative",
  lineHeight: "$heading",
  color: "$text",
  "&:hover": { "& a": { opacity: 1 } },
  variants: {
    size: {
      h1: {
        fontWeight: "$bold",
        fontSize: "$11",
        marginTop: "$11",
      },
      h2: {
        fontWeight: "$bold",
        fontSize: "$10",
        marginTop: "$10",
      },
      h3: {
        fontWeight: "$semibold",
        fontSize: "$7",
        marginTop: "$6",
      },
      h4: {
        fontWeight: "$semibold",
        fontSize: "$5",
      },
      h5: {
        fontWeight: "$medium",
        fontSize: "$3",
      },
      h6: {
        fontWeight: "$medium",
        fontSize: "$2",
      },
    },
  },
  defaultVariants: {
    size: "h2",
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
