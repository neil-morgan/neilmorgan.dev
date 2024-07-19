import { styled } from "@/lib/stitches";

export const ImageWrapper = styled("div", {
  display: "flex",
  height: "$7",
  width: "$7",
  margin: "0 auto",

  "@md": {
    height: "$8",
    width: "$8",
  },
});
