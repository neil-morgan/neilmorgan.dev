import type { Post, PostData } from "@/graphql";
import type { RichtextHeadingsType } from "@/types";

export type PostTemplateProps = {
  content: Post & PostData;
  headings: RichtextHeadingsType;
};
