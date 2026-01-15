import type { RichtextLinksType, RichtextNodeType } from "../Richtext.types";

type BlockEntry = RichtextLinksType["entries"]["block"][number];

export const getRichtextEntry = (
  links: RichtextLinksType,
  node: RichtextNodeType
): BlockEntry | undefined => {
  const blockMap = new Map<string, BlockEntry>();
  for (const entry of links.entries.block) {
    if (entry?.sys.id) {
      blockMap.set(entry.sys.id, entry);
    }
  }

  return blockMap.get(node.data.target.sys.id);
};
