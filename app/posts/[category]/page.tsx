import { CategoryMetaProps } from "@/types";
import { PostsTemplate } from "@/components/templates";
import { getClient } from "@/lib/apollo";
import {
  CategoryDocument,
  AllPostsCategoryDocument,
  PostSlugsDocument,
  type PostCategory,
  type Post,
} from "@/graphql";
import type { GroupedPostType } from "@/types";

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
  const { data } = await getClient().query({
    query: AllPostsCategoryDocument,
    variables: {
      slug: params.category,
    },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  const groupedPosts: GroupedPostType = {
    category: data?.posts?.items[0]?.category as PostCategory,
    items: data?.posts?.items as Post[],
  };

  return <PostsTemplate posts={groupedPosts} />;
};

export default PostCategoryPage;
