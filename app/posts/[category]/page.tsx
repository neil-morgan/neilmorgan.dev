import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { PostsTemplate } from "@/components/templates";
import { PAGE_TITLE_PREFIX } from "@/lib/site";
import {
  PostCategoryDocument,
  PostsByCategoryDocument,
  PostsDocument,
  type CategoryMetaProps,
  type GroupedPostType,
  type Post,
  type PostCategory,
} from "@/service";
import { fetchContent } from "@/helpers";

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
  }));
}

export async function generateMetadata({ params }: CategoryMetaProps) {
  const data = await fetchContent({
    document: PostCategoryDocument,
    variables: {
      slug: params.category,
    },
  });
  return {
    title: `${PAGE_TITLE_PREFIX} | ${data?.postCategory?.items[0]?.title} posts`,
  };
}

export default async function PostCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { isEnabled } = draftMode();
  const data = await fetchContent({
    document: PostsByCategoryDocument,
    tags,
    preview: isEnabled,
    variables: {
      slug: params.category,
      preview: isEnabled,
    },
  });

  const posts = data?.posts?.items as Post[];
  const category = data?.posts?.items[0]?.category as PostCategory;

  if (posts.length === 0 || !category || category.slug !== params.category) {
    return notFound();
  }

  const groupedPosts: GroupedPostType = {
    category,
    items: posts,
  };

  return <PostsTemplate posts={groupedPosts} />;
}
