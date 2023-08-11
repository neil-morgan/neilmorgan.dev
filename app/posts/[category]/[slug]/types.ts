import { type Post, type PostData } from "@/graphql";

export type SlugProps = {
  params: { slug: string };
};

export type MetaProps = {
  params: { slug: string; category: string };
};

export type PostProps = Post & PostData;
