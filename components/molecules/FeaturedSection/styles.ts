import { styled } from "@/lib/stitches";

export const Wrapper = styled("section", {
  margin: "$11 0",
});

export const Body = styled("div", {
  background: "$layer2",
  minHeight: "30vh",
  padding: "$6 0",
  "> * ": {
    position: "relative",
    zIndex: 2,
  },
});
