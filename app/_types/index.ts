import type { PageContentLinksFragment } from "@/app/_graphql/generated";

import type { Block, Inline } from "@contentful/rich-text-types";

export type Typename = NonNullable<
  PageContentLinksFragment["entries"]["block"][number]
>["__typename"];

export type ComponentsProps = {
  id: string;
  __typename: Typename;
};

export type RichtextNodeType = Block | Inline;
export type RichtextBlockMapType = Map<string, RichtextNodeType>;
