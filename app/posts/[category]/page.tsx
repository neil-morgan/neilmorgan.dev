import { redirect } from "next/navigation";
import { CategoryMetaProps } from "@/types";
import { PostsTemplate } from "@/components/templates";
import { getClient } from "@/lib/apollo";
import { getFeatureFlags } from "@/helpers";
import {
  CategoryDocument,
  AllPostsCategoryDocument,
  PostSlugsDocument,
  type PostCategory,
  type Post,
} from "@/graphql";
import type { GroupedPostType } from "@/types";

export const revalidate = 1;

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
  }));
}

export async function generateMetadata({ params }: CategoryMetaProps) {
  const { data } = await getClient().query({
    query: CategoryDocument,
    variables: {
      slug: params.category,
    },
  });

  return { title: `${data?.post?.items[0]?.title} articles` };
}

const PostCategoryPage = async ({
  params,
}: {
  params: { category: string };
}) => {
  const { postsContent } = await getFeatureFlags();

  if (!postsContent) {
    redirect("/");
  }

  const { data } = await getClient().query({
    query: AllPostsCategoryDocument,
    fetchPolicy: "no-cache",
    variables: {
      slug: params.category,
    },
  });

  const groupedPosts: GroupedPostType = {
    category: data?.posts?.items[0]?.category as PostCategory,
    items: data?.posts?.items as Post[],
  };

  return <PostsTemplate posts={groupedPosts} />;
};

export default PostCategoryPage;
