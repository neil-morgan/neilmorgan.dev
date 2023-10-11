import { styled } from "@/lib/stitches";

export const Grid = styled("div", {
  display: "grid",
  marginTop: "$5",

  variants: {
    columns: {
      2: {
        gridTemplateColumns: "repeat(1, 1fr)",
        gap: "$6",
        "@md": {
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "$7",
        },
      },
      3: {
        gridTemplateColumns: "repeat(1, 1fr)",
        gap: "$6",
        "@md": {
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "$7",
        },
        "@lg": {
          gridTemplateColumns: "repeat(3, 1fr)",
        },
      },
    },
  },

  defaultVariants: {
    columns: 2,
  },
});
