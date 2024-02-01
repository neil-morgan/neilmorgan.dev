import { CategoryMetaProps } from "@/types";
import { PostsTemplate } from "@/components/templates";
import { PAGE_TITLE_PREFIX } from "@/lib/site";
import {
  CategoryDocument,
  AllPostsCategoryDocument,
  type PostCategory,
  type Post,
  AllPostsDocument,
} from "@/graphql";
import type { GroupedPostType } from "@/types";
import { fetchContent } from "@/helpers";

export async function generateStaticParams() {
  const data = await fetchContent({
    document: AllPostsDocument,
  });
  const { items } = data?.posts || {};
  return items?.map(item => ({
    category: item?.category?.slug,
  }));
}

export async function generateMetadata({ params }: CategoryMetaProps) {
  const data = await fetchContent({
    document: CategoryDocument,
    variables: {
      slug: params.category,
    },
  });
  return {
    title: `${PAGE_TITLE_PREFIX}${data?.postCategory?.items[0]?.title} posts`,
  };
}

const PostCategoryPage = async ({
  params,
}: {
  params: { category: string };
}) => {
  const data = await fetchContent({
    document: AllPostsCategoryDocument,
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

export const revalidate = 5;
export const dynamicParams = false;
export default PostCategoryPage;
