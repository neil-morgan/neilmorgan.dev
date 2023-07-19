import { styled } from "@stitches/react";

export const defaultStyles = {
  position: "relative",
  lineHeight: "$heading",
  fontWeight: "$light",
  color: "$text",
  "&:hover": { "& a": { opacity: 1 } },
};

export const HeadingElement = styled("h2", {
  variants: {
    size: {
      h1: {
        ...defaultStyles,
        fontSize: "$11",
        marginTop: "$11",
      },
      h2: {
        ...defaultStyles,
        fontSize: "$9",
        marginTop: "$10",
      },
      h3: {
        ...defaultStyles,
        fontSize: "$7",
        marginTop: "$6",
      },
      h4: {
        ...defaultStyles,
        fontSize: "$5",
      },
      h5: {
        ...defaultStyles,
        fontSize: "$3",
      },
      h6: {
        ...defaultStyles,
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
  top: "0",
  transform: "translateX(-130%)",
  transition: "ease 250ms",
  variants: {
    size: {
      h2: {
        scrollMarginTop: "$11",
      },
      h3: {
        scrollMarginTop: "$11",
      },
    },
  },
  defaultVariants: {
    size: "h2",
  },
});
