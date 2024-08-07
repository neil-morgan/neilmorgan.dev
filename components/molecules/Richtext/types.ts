import type { Block, Inline } from "@contentful/rich-text-types";
import type { CSS } from "@stitches/react";
import type { RichtextType, ImagesMap } from "@/service";

export type RichtextProps = {
  content: RichtextType;
  setCurrentId?: (id: string) => void;
  base64Map?: ImagesMap;
  css?: CSS;
};

export type RichtextNodeType = Block | Inline;
export type RichtextBlockMapType = Map<any, any>;
