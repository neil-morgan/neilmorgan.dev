import type { Post } from "@/graphql/cms";
import type { PostData } from "@/graphql/db";
import type { RichtextHeadingsType } from "@/types";

export type PostTemplateProps = {
  content: Post & PostData;
  headings: RichtextHeadingsType;
};
