"use client";

import { renderRichtextDocument } from "./render-richtext-document";
import type { LiveRichtextEntry, RichtextProps } from "./Richtext.types";

type LiveRichtextProps = RichtextProps & {
  entries: LiveRichtextEntry[];
};

export const LiveRichtext = ({
  entries,
  json,
  links,
  noPadding,
}: LiveRichtextProps) => {
  const entryMap = new Map(entries.map(({ id, node }) => [id, node]));
  return renderRichtextDocument({
    json,
    links,
    noPadding,
    renderEntry: (entry) => entryMap.get(entry.sys.id) ?? null,
  });
};
