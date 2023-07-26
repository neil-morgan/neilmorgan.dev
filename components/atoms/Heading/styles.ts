import { styled } from "@/lib/stitches";

export const HeadingElement = styled("h2", {
  position: "relative",
  lineHeight: "$heading",
  color: "$text",
  "&:hover": { "& a": { opacity: 1 } },

  variants: {
    size: {
      h1: {
        fontWeight: "$semibold",
        fontSize: "$11",
      },
      h2: {
        fontWeight: "$semibold",
        fontSize: "$9",
      },
      h3: {
        fontWeight: "$medium",
        fontSize: "$7",
      },
      h4: {
        fontWeight: "$medium",
        fontSize: "$6",
      },
      h5: {
        fontWeight: "$medium",
        fontSize: "$5",
      },
      h6: {
        fontWeight: "$medium",
        fontSize: "$4",
      },
    },

    style: {
      print: {
        letterSpacing: "$widest",
        textTransform: "uppercase",
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
  fontSize: "$6",
  display: "none",
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
  "@md": {
    display: "flex",
  },
});
