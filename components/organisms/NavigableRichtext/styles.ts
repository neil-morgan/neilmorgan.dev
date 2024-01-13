import { styled } from "@/lib/stitches";

export const Body = styled("div", {
  display: "flex",
  marginTop: "$9",
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
  width: "100%",
  top: "$11",
  height: "100%",
  display: "none",
  gap: "$5",
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

export const List = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  "& > div": {
    paddingLeft: "$4",
    gap: "$3",
  },
});

export const ListItem = styled("div", {
  display: "flex",
  position: "relative",
  color: "$white",

  "& svg": {
    position: "absolute",
    top: "50%",
    left: 0,
    transform: "translate(-50%, -50%)",
    color: "$primary1",
  },
});
