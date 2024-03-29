import { styled } from "@/lib/stitches";

export const Article = styled("article", {
  maxWidth: "min(700px, 100%)",
  "& > *": {
    marginTop: 0,

    "&:not(:last-child)": { marginBottom: "$7" },
  },
});
