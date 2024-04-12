import { styled } from "@/lib/stitches";

export const Wrapper = styled("a", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "$3 $2",
  gap: "$2",
  borderRadius: "$md",
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "$border",
  transition: "250ms ease",
  color: "$white",

  "&:hover": {
    borderColor: "$borderHover",
    background: "$highlightHover",
  },

  "@md": {
    gap: "$4",
    padding: "$4",
  },
});

export const ImageWrapper = styled("div", {
  display: "flex",
  height: "$7",
  width: "$7",

  "@md": {
    height: "$8",
    width: "$8",
  },
});
