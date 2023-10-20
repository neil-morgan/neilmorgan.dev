import { styled } from "@/lib/stitches";

export const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$backgroundClose",
  borderRadius: "$md",
  alignItems: "flex-start",

  variants: {
    size: {
      sm: {
        padding: "$3",
      },
      md: {
        padding: "$5",
      },
      lg: {
        padding: "$7",
      },
    },
  },

  defaultVariants: {
    size: "medium",
  },
});
