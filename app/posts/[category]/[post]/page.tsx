import { draftMode } from "next/headers";
import type { SlugProps, SlugMetaProps } from "@/types";
import { PostTemplate } from "@/components/templates";
import { fetchContent } from "@/helpers";
import { PostDocument, Post, AllPostsDocument } from "@/graphql";

const tags = ["post"];

export async function generateStaticParams() {
  const data = await fetchContent({
    document: AllPostsDocument,
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

export async function generateMetadata({ params }: SlugMetaProps) {
  const { isEnabled } = draftMode();
  const data = await fetchContent({
    document: PostDocument,
    preview: isEnabled,
    variables: { slug: params.slug, preview: isEnabled },
  });
  const post = data?.post?.items[0] as Post;
  const title = post?.title;
  const description = post?.description;
  return { title, description };
}

const PostPage = async ({ params }: SlugProps) => {
  const { isEnabled } = draftMode();
  const data = await fetchContent({
    document: PostDocument,
    preview: isEnabled,
    tags,
    variables: { slug: params.slug, preview: isEnabled },
  });

  const post = data.post?.items[0] as Post;
  return <PostTemplate content={{ ...post }} />;
};

export const revalidate = 5;
export const dynamicParams = false;
export default PostPage;
