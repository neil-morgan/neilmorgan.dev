import type { ContentGroup, Post, ImagesMap } from "@/service";

export type HomeTemplateProps = {
  latestPost: Post;
  header: ContentGroup;
  sellingPoints: ContentGroup[];
  base64Map: ImagesMap;
};
