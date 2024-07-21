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

  variants: {
    reverse: {
      true: {
        order: "1",
        "@md": { order: "-1" },
      },
    },
  },
});
