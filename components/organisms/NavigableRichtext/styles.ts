import { styled } from "@/lib/stitches";

export const Body = styled("div", {
  display: "flex",
  marginTop: "$9",
  justifyContent: "center",
});

export const Content = styled("article", {
  maxWidth: "min(686px, 100%)",
  "& > *": {
    marginTop: 0,

    "&:not(:last-child)": { marginBottom: "$8" },
  },
});

export const Aside = styled("aside", {
  position: "sticky",
  top: "$11",
  height: "100%",
  gap: "$6",
  display: "none",
  flexDirection: "column",
  alignItems: "flex-start",
  marginRight: "auto",
  justifyContent: "center",

  "@lg": {
    display: "flex",
    marginLeft: "$11",
  },
  "@xl": {
    marginLeft: "$12",
  },
});

export const AsideFooter = styled("footer", {
  display: "flex",
  width: "100%",
  padding: "0 $4",
});

export const List = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  "& > div > div": {
    marginLeft: "$4",
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
    transform: "translate(-125%, -50%)",
    color: "$primary1",
  },
});
