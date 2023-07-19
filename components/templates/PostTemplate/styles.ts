import { styled } from "@/lib/stitches";

export const PostHeader = styled("header", {
  display: "flex",
  flexDirection: "column",
  // padding: "$10 0 $11",
});

export const PostWrapper = styled("div", { display: "flex" });

export const PostContent = styled("div", {
  maxWidth: "min(686px, 100%)",
});

export const PostAside = styled("aside", {
  display: "flex",
  width: "100%",
  alignItems: "flex-start",
  marginLeft: "$6",
});

export const HeadingsWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});
