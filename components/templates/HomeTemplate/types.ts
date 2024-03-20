import type { ContentGroup, Post, Maybe } from "@/graphql";

export type HomeTemplateProps = {
  latestPost: Post;
  header: ContentGroup;
  sellingPoints: ContentGroup[];
};
