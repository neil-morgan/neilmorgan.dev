"use client";

import type { ListProps } from "./types";
import { Element } from "./styles";
import { styled } from "@/lib/stitches";

export const ListItem = styled("li", {
  listStylePosition: "inside",
});

export const List = ({
  children,
  format = "bullets",
  gap,
  css,
}: React.PropsWithChildren<ListProps>) => (
  <Element
    as={format === "numbers" ? "ol" : "ul"}
    css={{ ...css, gap }}
    format={format}>
    {children}
  </Element>
);
