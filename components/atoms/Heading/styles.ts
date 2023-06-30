import { styled } from "@stitches/react";

export const heading = {
  position: "relative",
  lineHeight: "$heading",
  fontWeight: "$light",
  color: "$text",
  margin: 0,
  "&:hover": { "& a": { opacity: 1 } },
};

export const HeadingElement = styled("h2", {
  variants: {
    size: {
      h1: {
        ...heading,
        fontSize: "$11",
        marginTop: "$9",
      },
      h2: {
        ...heading,
        fontSize: "$9",
      },
      h3: {
        ...heading,
        fontSize: "$7",
      },
      h4: {
        ...heading,
        fontSize: "$5",
      },
      h5: {
        ...heading,
        fontSize: "$3",
      },
      h6: {
        ...heading,
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
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  left: "0",
  $my: "auto",
  opacity: "0",
  position: "absolute",
  scrollMarginTop: "40",
  top: "0",
  transform: "translateX(-130%)",
  transition: "ease 250ms",
});
