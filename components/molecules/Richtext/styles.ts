import { styled } from "@/lib/stitches";

export const Wrapper = styled("div", {
  maxWidth: "min(700px, 100%)",
  width: "100%",
  "& > *": {
    marginTop: 0,
    "&:not(:last-child)": { marginBottom: "$7" },
  },
});
