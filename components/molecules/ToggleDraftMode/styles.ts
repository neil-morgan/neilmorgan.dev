import { styled } from "@/lib/stitches";

export const DraftModeButton = styled("a", {
  display: "flex",
  position: "fixed",
  bottom: "$4",
  right: "$4",
  flex: 1,
  flexDirection: "column",
  fontSize: "$1",
  padding: "$1 $2",
  borderRadius: "100px",
  zIndex: 1000,

  variants: {
    isEnabled: {
      true: {
        color: "$black",
        background: "$primary1",
      },
      false: {
        background: "$primary2",
      },
    },
  },

  defaultVariants: {
    isEnabled: false,
  },
});
