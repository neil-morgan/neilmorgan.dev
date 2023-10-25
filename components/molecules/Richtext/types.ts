import type { Block, Inline } from "@contentful/rich-text-types";
import type { RichtextType } from "@/types";

export type RichtextProps = { content: RichtextType };
export type RichtextNodeType = Block | Inline;
export type RichtextBlockMapType = Map<any, any>;
