import { styled } from "@/lib/stitches";

export const ContentWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "$6",

  "@md": {
    gap: "$10",
    gridTemplateColumns: "1fr 1fr",
  },
});

export const ContentDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "$4",

  variants: {
    reverse: {
      true: {
        order: "1",
        "@md": { order: "-1" },
      },
    },
  },
});

export const ContentHeader = styled("header", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
});

export const ContentImage = styled("div", {
  display: "flex",
  alignItems: "center",
  position: "relative",
});
