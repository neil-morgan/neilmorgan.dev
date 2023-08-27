import type { Post } from "@/graphql";
import type { RichtextHeadingsType } from "@/types";

export type PostTemplateProps = {
  content: Post & {
    likes: number | null | undefined;
  };
  headings: RichtextHeadingsType;
};
