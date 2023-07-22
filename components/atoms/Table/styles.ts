"use client";

import { styled } from "@/lib/stitches";

const defaultCellStyle = {
  textAlign: "left",
  padding: "$3 $5",
  verticalAlign: "top",
};

export const TableElement = styled("table", {
  margin: "$8 0",
  width: "100%",
  borderSpacing: "0",
});

export const Tr = styled("tr", {
  "&:not(:last-of-type) td": {
    borderBottomWidth: "1px",
    borderBottomStyle: "dashed",
    borderBottomColor: "$divider",
  },
});

export const Th = styled("th", {
  borderBottomWidth: "2px",
  borderBottomStyle: "solid",
  borderBottomColor: "$divider",
  ...defaultCellStyle,
});

export const Td = styled("td", {
  ...defaultCellStyle,
  "&:not(:last-of-type)": {
    borderRightWidth: "1px",
    borderRightStyle: "dashed",
    borderRightColor: "$divider",
  },
  borderBottomWidth: "2px",
  borderBottomStyle: "solid",
  borderBottomColor: "$divider",
});