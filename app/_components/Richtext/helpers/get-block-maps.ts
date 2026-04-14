import type { RichtextLinksType, RichtextNodeType } from "../Richtext.types";

export const getBlockMaps = (links: RichtextLinksType) => {
  const entryBlockMap = new Map();
  const assetBlockMap = new Map();
  const inlineBlockMap = new Map();

  for (const asset of links.assets.block) {
    assetBlockMap.set(asset?.sys.id, asset);
  }

  for (const entry of links.entries.block) {
    entryBlockMap.set(entry?.sys.id, entry);
  }

  for (const entry of links.entries.inline ?? []) {
    inlineBlockMap.set(entry?.sys.id, entry);
  }

  return { entryBlockMap, inlineBlockMap, assetBlockMap };
};

export const getBlockMap = (
  links: RichtextLinksType,
  node: RichtextNodeType
) => {
  const blockMap = new Map();
  for (const entry of links.entries.block) {
    blockMap.set(entry?.sys.id, entry);
  }
  return blockMap.get(node.data.target.sys.id);
};
