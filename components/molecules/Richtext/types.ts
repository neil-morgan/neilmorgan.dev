import type { Block, Inline } from "@contentful/rich-text-types";
import type { PostBody } from "@/graphql/cms";

export type RichtextProps = { content: PostBody };
export type RichtextNodeType = Block | Inline;
export type RichtextBlockMapType = Map<any, any>;
