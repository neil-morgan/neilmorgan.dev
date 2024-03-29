import type { Post, ImagesMap } from "@/service";

export type PostTemplateProps = {
  content: Post;
  base64Map: ImagesMap;
};
