import { styled } from "@/lib/stitches";

export const FooterElement = styled("footer", {
  marginTop: "$12",
  padding: "$10 0",
  borderTop: "solid 2px $border",
});

export const CopyRight = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "$6",
});
