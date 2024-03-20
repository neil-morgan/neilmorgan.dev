import type { Asset, Maybe, PostTagsCollection } from "@/graphql";

export type ContentPresentationProps = {
  title: string | null;
  body: string | null;
  reverse?: boolean;
  cta: {
    label: string;
    href: string | null;
  };
  label: string;
  image: Maybe<Asset>;
  tags: Maybe<PostTagsCollection>;
};
