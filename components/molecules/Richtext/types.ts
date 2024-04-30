import type { Block, Inline } from "@contentful/rich-text-types";
import type { RichtextType, ImagesMap } from "@/service";

export type RichtextProps = {
  content: RichtextType;
  setCurrentId?: (id: string) => void;
  base64Map: ImagesMap;
};
export type RichtextNodeType = Block | Inline;
export type RichtextBlockMapType = Map<any, any>;
