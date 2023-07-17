import { type Post } from "@/graphql/cms";
import { type PostData } from "@/graphql/db";

export type PostTemplateProps = {
  content: Post & PostData;
};
