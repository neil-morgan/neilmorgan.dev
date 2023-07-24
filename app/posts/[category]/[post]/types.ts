import { type Post } from "@/graphql/cms";
import { type PostData } from "@/graphql/db";

export type PostPageProps = {
  params: { post: string };
};

export type PostProps = Post & PostData;
