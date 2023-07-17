import { type PostBodyLinks } from "@/graphql/cms";

export const getBlockMaps = (links: PostBodyLinks) => {
  const entryBlockMap = new Map();
  const assetBlockMap = new Map();

  for (const asset of links.assets.block) {
    assetBlockMap.set(asset?.sys.id, asset);
  }

  for (const entry of links.entries.block) {
    entryBlockMap.set(entry?.sys.id, entry);
  }

  return { entryBlockMap, assetBlockMap };
};
