import { styled } from "@/lib/stitches";

export const Header = styled("header", {
  display: "flex",
  flexDirection: "column",
});

export const Body = styled("div", {
  display: "flex",
  justifyContent: "center",
});

export const Aside = styled("aside", {
  position: "sticky",
  top: "$12",
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
  marginBottom: "$5",
});

export const AsideFooter = styled("footer", {
  display: "flex",
  marginTop: "$5",
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
