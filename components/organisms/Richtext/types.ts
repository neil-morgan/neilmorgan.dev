import type { Block, Inline } from "@contentful/rich-text-types";
import type { RichtextType } from "@/types";
import type { Maybe, Asset } from "@/graphql";

export type RichtextProps = {
  content: RichtextType;
  setCurrentId: (id: string) => void;
  titleImage: Maybe<Asset>;
};
export type RichtextNodeType = Block | Inline;
export type RichtextBlockMapType = Map<any, any>;
