"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, type Document } from "@contentful/rich-text-types";
import type { ReactNode } from "react";

export const removeParagraphTags = (
  node: Document,
  renderMark: {
    bold: (text: ReactNode) => JSX.Element;
    code: (text: ReactNode) => JSX.Element;
  },
  element: string,
) => {
  const elements: { [key: string]: string } = {
    li: BLOCKS.LIST_ITEM,
    th: BLOCKS.TABLE_HEADER_CELL,
    td: BLOCKS.TABLE_CELL,
  };

  return documentToReactComponents(node, {
    renderMark,
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => children,
      [elements[element]]: (_, children: ReactNode) => children,
    },
  });
};
