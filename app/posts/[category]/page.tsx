import { CategoryMetaProps } from "@/types";
import { PostsTemplate } from "@/components/templates";
import { getAllPostsCategory, getCategory } from "@/services";
import { getPost } from "@/services";

export const revalidate = 1;

export async function generateStaticParams() {
  const { slugs } = await getPost();

  if (!slugs) {
    return [];
  }

  return slugs?.map(post => ({
    category: post?.category?.slug,
  }));
}

export async function generateMetadata({ params }: CategoryMetaProps) {
  const data = await getCategory(params.category);
  return { title: `${data?.title} articles` };
}

const PostCategoryPage = async ({
  params,
}: {
  params: { category: string };
}) => {
  return <PostsTemplate posts={await getAllPostsCategory(params.category)} />;
};

export default PostCategoryPage;
