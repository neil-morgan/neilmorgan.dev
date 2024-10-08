"use client";

import { styled } from "@/lib/stitches";
import { BREAKPOINTS } from "@/lib/site";

const defaultCellStyle = {
  textAlign: "left",
  padding: "$3 $5",
  verticalAlign: "top",
};

export const TableWrapper = styled("div", {
  overflowX: "scroll",
  margin: "$8 0",
  width: "100%",
});

export const TableElement = styled("table", {
  margin: "$8 0",
  width: "100%",
  minWidth: `${BREAKPOINTS.sm / 16}rem`,
  borderSpacing: "0",
});

export const Tr = styled("tr", {
  "&:not(:last-of-type) td": {
    borderBottom: "dashed 1px $border",
  },
});

export const Th = styled("th", {
  color: "$white",
  borderBottom: "solid 2px $border",
  ...defaultCellStyle,
});

export const Td = styled("td", {
  ...defaultCellStyle,
  "&:not(:last-of-type)": {
    borderRight: "dashed 1px $border",
  },
  borderBottom: "solid 2px $border",
  color: "$text",
});
