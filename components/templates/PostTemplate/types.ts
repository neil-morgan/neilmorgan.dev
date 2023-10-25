import type { Post } from "@/graphql";

export type PostTemplateProps = {
  content: Post & {
    likes: number | null | undefined;
  };
};
