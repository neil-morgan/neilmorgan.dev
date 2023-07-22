"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { RichtextProps } from "./types";
import { getBlockMaps, renderMark, renderNode, renderText } from "./helpers";

export const Richtext = ({ content }: RichtextProps) => {
  const { entryBlockMap, inlineBlockMap, assetBlockMap } = getBlockMaps(
    content.links,
  );

  return documentToReactComponents(content.json, {
    renderMark,
    renderText,
    renderNode: renderNode(entryBlockMap, inlineBlockMap, assetBlockMap),
  });
};
