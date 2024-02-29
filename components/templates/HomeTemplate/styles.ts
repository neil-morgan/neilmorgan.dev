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
  alignItems: "flex-start",
  maxWidth: "100%",
  width: "100%",
  textAlign: "center",
  marginBottom: "$9",
  marginTop: 0,

  "@md": {
    maxWidth: "600px",
    marginTop: "$9",
  },

  "@lg": {
    marginBottom: 0,
    marginTop: "$11",
  },
});
