import { type Post } from "@/graphql/cms";
import { type PostData } from "@/graphql/db";

export type SlugProps = {
  params: { slug: string };
};

export type MetaProps = {
  params: { slug: string; category: string };
};

export type PostProps = Post & PostData;
