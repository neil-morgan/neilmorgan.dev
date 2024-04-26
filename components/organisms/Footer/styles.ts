import { styled } from "@/lib/stitches";

export const FooterElement = styled("footer", {
  padding: "$3 0",
  marginTop: "$10",

  "@sm": {
    padding: "$4 0",
  },
  "@md": {
    padding: "$6 0",
    marginTop: "$11",
  },
});

export const CopyRight = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "$6",
});
