import { styled } from "@/lib/stitches";

export const Body = styled("div", {
  display: "flex",
  justifyContent: "center",
});

export const Content = styled("article", {
  maxWidth: "min(686px, 100%)",
  "& > *:first-child": {
    marginTop: 0,
  },
});

export const Aside = styled("aside", {
  position: "sticky",
  top: "$12",
  width: "100%",
  height: "100%",
  display: "none",
  "@lg": {
    display: "flex",
  },
  flexDirection: "column",
  alignItems: "flex-start",
  marginRight: "auto",
  marginLeft: "$11",
});

export const AsideHeader = styled("header", {
  display: "flex",
  width: "100%",
});

export const NavList = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  "& > div": {
    paddingLeft: "$4",
    gap: "$3",
  },
});

export const NavListItem = styled("a", {
  textDecoration: "none",
  color: "$text3",
  transition: "$theme",
  "&:hover": {
    color: "$text1",
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
