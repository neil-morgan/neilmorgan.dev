"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, type Document } from "@contentful/rich-text-types";
import type { ReactNode } from "react";
import { renderMark } from ".";
import type { RichtextNodeType } from "../types";

export const removeParagraphTags = (
  node: RichtextNodeType,
  element: string,
) => {
  const elements: { [key: string]: string } = {
    li: BLOCKS.LIST_ITEM,
    th: BLOCKS.TABLE_HEADER_CELL,
    td: BLOCKS.TABLE_CELL,
    quote: BLOCKS.QUOTE,
    code: MARKS.CODE,
  };

  return documentToReactComponents(node as Document, {
    renderMark,
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => children,
      [elements[element]]: (_, children: ReactNode) => children,
    },
  });
};
