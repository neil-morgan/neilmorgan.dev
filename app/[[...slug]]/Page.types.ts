import type { Block, Inline } from "@contentful/rich-text-types";

export type RichtextNodeType = Block | Inline;
export type RichtextBlockMapType = Map<string, RichtextNodeType>;

export type PageParams = { params: Promise<{ slug: string[] }> };
