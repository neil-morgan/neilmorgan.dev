import { styled } from "@/lib/stitches";

export const PostHeader = styled("header", {
  display: "flex",
  flexDirection: "column",
});

export const PostWrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
});

export const PostAside = styled("aside", {
  position: "sticky",
  top: "$11",
  height: "100%",
  display: "none",
  '@lg': {
    display: "flex",
  },
  flexDirection: "column",
  alignItems: "flex-start",
  marginRight: "auto",
  marginLeft: "$11",
});

export const PostAsideHeader = styled("header", {
  display: "flex",
  marginBottom: "$5",
});

export const PostAsideFooter = styled("footer", {
  display: "flex",
  marginTop: "$5",
});

export const HeadingsWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  "& > div": {
    paddingLeft: "$4",
    gap: "$3",
  },
});

export const HeadingLink = styled("a", {
  textDecoration: "none",
  color: "$baseText",
  transition: "$theme",
  "&:hover": {
    color: "#ffffff",
  },
  variants: {
    size: {
      mainHeading: {
        fontSize: "$3",
      },
      subHeading: {
        fontSize: "$2",
      },
    },
  },
  defaultVariants: {
    size: "mainHeading",
  },
});
