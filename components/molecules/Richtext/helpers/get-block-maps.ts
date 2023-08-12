import { type PostBodyLinks } from "@/graphql";

export const getBlockMaps = (links: PostBodyLinks) => {
  const entryBlockMap = new Map();
  const assetBlockMap = new Map();
  const inlineBlockMap = new Map();

  for (const asset of links.assets.block) {
    assetBlockMap.set(asset?.sys.id, asset);
  }

  for (const entry of links.entries.block) {
    entryBlockMap.set(entry?.sys.id, entry);
  }

  for (const entry of links.entries.inline) {
    inlineBlockMap.set(entry?.sys.id, entry);
  }

  return { entryBlockMap, inlineBlockMap, assetBlockMap };
};
