import { styled } from "@/lib/stitches";

export const Element = styled("div", {
  position: "relative",
  fontSize: "inherit",
  fontWeight: "normal",
  transition: "$theme",
  lineHeight: "1.5",

  "&:hover a": { opacity: 1 },

  "& ~ p:not(:first-child)": {
    marginTop: "$4",
    color: "$text",
  },

  "& ~ strong": {
    fontWeight: "700",
  },

  variants: {
    size: {
      10: {
        fontSize: "$10",
      },
      9: {
        fontSize: "$9",
      },
      8: {
        fontSize: "$8",
      },
      7: {
        fontSize: "$7",
      },
      6: {
        fontSize: "$6",
      },
      5: {
        fontSize: "$5",
      },
      4: {
        fontSize: "$4",
      },
      3: {
        fontSize: "$3",
      },
      2: {
        fontSize: "$2",
      },
      1: {
        fontSize: "$1",
      },
      0: {
        fontSize: "$0",
      },
    },

    print: {
      true: {
        letterSpacing: "$widest",
        textTransform: "uppercase",
      },
    },
  },

  defaultVariants: {
    size: 2,
  },
});

export const Anchor = styled("a", {
  "&:hover": { opacity: 1 },
  bottom: "0",
  color: "inherit",
  fontSize: "$5",
  display: "none",
  flexDirection: "column",
  justifyContent: "center",
  left: "0",
  $my: "auto",
  opacity: "0",
  position: "absolute",
  top: "0",
  transform: "translateX(-120%)",
  transition: "ease 250ms",

  variants: {
    scrollMargin: {
      10: {
        scrollMarginTop: "$10",
      },
      9: {
        scrollMarginTop: "$9",
      },
      8: {
        scrollMarginTop: "$8",
      },
      7: {
        scrollMarginTop: "$7",
      },
      6: {
        scrollMarginTop: "$6",
      },
      5: {
        scrollMarginTop: "$5",
      },
      4: {
        scrollMarginTop: "$4",
      },
      3: {
        scrollMarginTop: "$3",
      },
      2: {
        scrollMarginTop: "$2",
      },
      1: {
        scrollMarginTop: "$1",
      },
      0: {
        scrollMarginTop: "$0",
      },
    },
  },

  "@md": {
    display: "flex",
  },
});
