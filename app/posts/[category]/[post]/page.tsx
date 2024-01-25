import { draftMode } from "next/headers";
import type { SlugProps, SlugMetaProps } from "@/types";
import { PostTemplate } from "@/components/templates";
import { getClient } from "@/lib/apollo";
import { PostDocument, Post, PostSlugsDocument } from "@/graphql";

export async function generateMetadata({ params }: SlugMetaProps) {
  const { data } = await getClient().query({
    query: PostDocument,
    variables: { slug: params.slug },
  });
  const { title, description } = data?.post?.items[0] as Post;
  return { title, description };
}

export async function generateStaticParams() {
  const { data } = await getClient().query({
    query: PostSlugsDocument,
    context: {
      fetchOptions: {
        cache: "no-store",
      },
    },
  });
  const { items } = data?.postSlugs || {};
  if (!items) {
    return [];
  }
  return items?.map(item => ({
    category: item?.category?.slug,
    post: item?.slug,
  }));
}

const PostPage = async ({ params }: SlugProps) => {
  const { isEnabled } = draftMode();
  const { data } = await getClient().query({
    context: {
      isPreviewMode: isEnabled,
    },
    query: PostDocument,
    variables: { slug: params.slug, preview: isEnabled },
  });
  const post = data.post?.items[0] as Post;
  return <PostTemplate content={{ ...post }} />;
};

export const revalidate = 5;
export const dynamicParams = false;
export default PostPage;
