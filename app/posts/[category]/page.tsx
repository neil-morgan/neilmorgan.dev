import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { PAGE_TITLE_PREFIX } from "@/lib/site";
import {
  PostCategoryDocument,
  PostsByCategoryDocument,
  PostsDocument,
  type CategoryMetaProps,
  type Post,
} from "@/service";
import { fetchContent } from "@/helpers";
import { Container } from "@/components/atoms";
import { PostsCategory } from "@/components/molecules";

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
  const { isEnabled: preview } = draftMode();
  const data = await fetchContent({
    document: PostsByCategoryDocument,
    tags,
    preview,
    variables: {
      slug: params.category,
    },
  });

  const posts = data?.posts?.items as Post[];
  const category = data?.posts?.items[0]?.category;

  if (posts.length === 0 || category?.slug !== params.category) {
    return notFound();
  }

  return (
    <Container>
      <PostsCategory category={category} items={posts} />
    </Container>
  );
}
