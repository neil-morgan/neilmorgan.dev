import { CategoryMetaProps } from "@/types";
import { PostsTemplate } from "@/components/templates";
import { getClient } from "@/lib/apollo";
import { PAGE_TITLE_PREFIX } from "@/lib/site";
import {
  CategoryDocument,
  AllPostsCategoryDocument,
  PostSlugsDocument,
  type PostCategory,
  type Post,
} from "@/graphql";
import type { GroupedPostType } from "@/types";

export async function generateMetadata({ params }: CategoryMetaProps) {
  const { data } = await getClient().query({
    query: CategoryDocument,
    variables: {
      slug: params.category,
    },
  });

  return { title: `${PAGE_TITLE_PREFIX}${data?.post?.items[0]?.title} posts` };
}

export async function generateStaticParams() {
  const { data } = await getClient().query({
    query: PostSlugsDocument,
  });
  const { items } = data?.postSlugs || {};
  if (!items) {
    return [];
  }
  return items?.map(item => ({
    category: item?.category?.slug,
  }));
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
  });

  const groupedPosts: GroupedPostType = {
    category: data?.posts?.items[0]?.category as PostCategory,
    items: data?.posts?.items as Post[],
  };

  return <PostsTemplate posts={groupedPosts} />;
};

export const dynamicParams = false;
export default PostCategoryPage;
