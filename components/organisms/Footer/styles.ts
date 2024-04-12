import { styled } from "@/lib/stitches";

export const FooterElement = styled("footer", {
  padding: "$10 0",
  marginTop: "$10",

  "@sm": {
    padding: "$4 0",
  },
  "@md": {
    padding: "$6 0",
    marginTop: "$11",
  },
  "@lg": {
    padding: "$6 0",
    marginTop: "$12",
  },
});

export const CopyRight = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "$6",
});
