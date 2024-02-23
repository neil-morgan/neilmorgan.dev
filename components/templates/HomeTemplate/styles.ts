import { styled } from "@/lib/stitches";

export const IntroWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  "@md": {
    flexDirection: "row",
  },
});

export const IntroDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  maxWidth: "100%",
  width: "100%",
  textAlign: "center",

  "@md": {
    maxWidth: "600px",
  },
});
