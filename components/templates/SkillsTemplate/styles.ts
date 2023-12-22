import { styled } from "@/lib/stitches";

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gridColumnGap: "$6",
  gridRowGap: "$9",
  "@md": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@lg": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});
