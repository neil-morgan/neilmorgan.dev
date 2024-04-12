import { styled } from "@/lib/stitches";

export const FooterElement = styled("footer", {
  marginBottom: "$10",

  "@sm": {
    marginBottom: "$4",
  },
  "@md": {
    marginBottom: "$6",
  },
});

export const Content = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

export const CopyRight = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "$6",
});
