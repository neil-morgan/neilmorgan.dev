import { draftMode } from "next/headers";
import type { SlugProps, SlugMetaProps } from "@/types";
import { PostTemplate } from "@/components/templates";
import { getClient } from "@/lib/apollo";
import {
  CategoryDocument,
  PostDocument,
  Post,
  PostSlugsDocument,
} from "@/graphql";

export async function generateMetadata({ params }: SlugMetaProps) {
  const { data } = await getClient().query({
    query: CategoryDocument,
    variables: { slug: params.category },
  });
  return { title: data?.post?.items[0]?.title };
}

export async function generateStaticParams() {
  const { data } = await getClient().query({
    query: PostSlugsDocument,
  });
  const { items } = data?.postSlugs || {};

  if (!items) {
    return [];
  }

  return items?.map(post => ({
    category: post?.category?.slug,
    slug: post?.slug,
  }));
}

const PostPage = async ({ params }: SlugProps) => {
  const { isEnabled } = draftMode();

  const { data } = await getClient().query({
    context: {
      isPreviewMode: isEnabled,
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
    query: PostDocument,
    variables: { slug: params.slug, preview: isEnabled },
  });

  const post = data.post?.items[0] as Post;

  return <PostTemplate content={{ ...post, likes: 0 }} />;
};

export default PostPage;
