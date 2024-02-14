import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import type { PostParamsType } from "@/types";
import { PostTemplate } from "@/components/templates";
import { fetchContent } from "@/helpers";
import { PostDocument, Post, PostsDocument } from "@/graphql";

const tags = ["post"];
export const revalidate = 5;

export async function generateStaticParams() {
  const data = await fetchContent({
    document: PostsDocument,
    tags,
  });
  const { items } = data?.posts || {};
  if (!items) {
    return [];
  }
  return items?.map(item => ({
    category: item?.category?.slug,
    post: item?.slug,
  }));
}

export async function generateMetadata({ params }: PostParamsType) {
  const { isEnabled } = draftMode();
  const data = await fetchContent({
    document: PostDocument,
    preview: isEnabled,
    variables: { slug: params.post, preview: isEnabled },
  });
  const post = data?.post?.items[0] as Post;
  const title = post?.title;
  const description = post?.description;
  return { title, description };
}

export default async function PostPage({ params }: PostParamsType) {
  const { isEnabled } = draftMode();
  const data = await fetchContent({
    document: PostDocument,
    preview: isEnabled,
    tags,
    variables: { slug: params.post, preview: isEnabled },
  });

  const post = data.post?.items[0] as Post;

  if (!post || post.slug !== params.post) {
    return notFound();
  }

  return <PostTemplate content={{ ...post }} />;
}
