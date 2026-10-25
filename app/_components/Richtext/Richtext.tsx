import { renderRichtextDocument } from "./render-richtext-document";

import type { RichtextProps } from "./Richtext.types";

export const Richtext = ({ entries, links, json }: RichtextProps) => {
  const entryMap = new Map(entries.map(({ id, node }) => [id, node]));
  return renderRichtextDocument({
    json,
    links,
    renderEntry: (entry) => entryMap.get(entry.sys.id) ?? null,
  });
};
