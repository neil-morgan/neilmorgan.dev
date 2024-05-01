import { styled } from "@/lib/stitches";

export const TagWrapper = styled("div", {
  display: "flex",
  padding: "$1 $3",
  borderRadius: "$md",
  variants: {
    color: {
      primary: {
        background: "$primary2",
        color: "$primary1",
        transition: "$theme",
        "&:hover": {
          background: "$primary1",
          color: "$layer1",
        },
      },
      secondary: {
        background: "$secondary2",
        color: "$secondary1",
      },
    },
  },
});

export const TagListWrapper = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "$4",
});
