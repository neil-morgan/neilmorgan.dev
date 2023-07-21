"use client";

import { getBlockMaps, renderText, renderMark, renderNode } from ".";
import type { PostBodyLinks } from "@/graphql/cms";

export const getRenderOptions = (links: PostBodyLinks) => {
  const { entryBlockMap, assetBlockMap } = getBlockMaps(links);

  return {
    renderMark,
    renderText,
    renderNode: renderNode(entryBlockMap),
  };
};
