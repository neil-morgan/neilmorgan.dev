"use client";

import type { ReactNode } from "react";
import { renderRichtextDocument } from "./render-richtext-document";
import type { RichtextProps } from "./Richtext.types";

export type LiveRichtextEntry = {
  id: string;
  node: ReactNode;
};

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
