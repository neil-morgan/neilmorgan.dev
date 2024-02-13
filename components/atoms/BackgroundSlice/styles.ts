import { styled } from "@/lib/stitches";

export const Wrapper = styled("div", {
  position: "relative",
  height: "5.25vw",

  variants: {
    reverse: {
      true: {
        transform: "rotateZ(180deg)",
      },
    },
  },
});

export const Svg = styled("svg", {
  position: "absolute",
  top: 0,
  left: 0,
});
