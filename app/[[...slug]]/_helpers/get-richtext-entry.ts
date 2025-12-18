import { PageContentLinksFragment } from "@/app/_graphql";

import type { RichtextNodeType } from "../Page.types";

type BlockEntry = PageContentLinksFragment["entries"]["block"][number];

export const getRichtextEntry = (
  links: PageContentLinksFragment,
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
