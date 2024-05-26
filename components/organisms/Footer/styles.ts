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

export const FooterItems = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  gap: "$10",
  "@sm": {
    alignItems: "flex-start",
    flexDirection: "row",
  },
});

export const FooterLinks = styled("nav", {
  display: "flex",
  gap: "$8",
});

export const CopyRight = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  "@sm": {
    alignItems: "flex-start",
    textAlign: "left",
  },
});
