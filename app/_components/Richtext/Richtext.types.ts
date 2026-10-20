import { ReactNode } from "react";
import type { RichtextImageFragment } from "@/app/_graphql/generated";
import type { Block, Inline, Document } from "@contentful/rich-text-types";

export type RichtextNodeType = Block | Inline;

export type RichtextBlockEntry = {
  __typename?: string;
  sys: { id: string };
  image?: RichtextImageFragment["image"];
  focalPoint?: RichtextImageFragment["focalPoint"];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
} | null;

export type RichtextLinksType = {
  entries: {
    block: Array<RichtextBlockEntry>;
    inline?: Array<RichtextBlockEntry>;
  };
  assets: {
    block: Array<{
      sys: { id: string };
      url?: string | null;
      description?: string | null;
      title?: string | null;
      contentType?: string | null;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string]: any;
    } | null>;
  };
};

export type RichtextProps = {
  json: Document;
  links?: RichtextLinksType;
  noPadding?: boolean;
};

export type LiveRichtextEntry = {
  id: string;
  node: ReactNode;
};
