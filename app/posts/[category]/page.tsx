import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { PostsCategory } from "../components";
import { PAGE_TITLE_PREFIX, LOCATIONS } from "@/lib/site";
import {
  PostCategoryDocument,
  PostsByCategoryDocument,
  PostsDocument,
  type CategoryMetaProps,
  type Post,
} from "@/service";
import { fetchContent, extractImagesToBase64Map } from "@/helpers";
import { Container, Separator } from "@/components/atoms";
import { PageHeader } from "@/components/molecules";

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
    title: `${data?.postCategory?.items[0]?.title} posts | ${PAGE_TITLE_PREFIX}`,
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

  const base64Map = await extractImagesToBase64Map(posts);
  const breadcrumbs = [
    LOCATIONS.home,
    LOCATIONS.posts,
    { label: category?.title as string },
  ];

  return (
    <Container>
      <PageHeader
        kicker="Post Category"
        heading={`${category.title} thoughts and opinions`}
        breadcrumbs={breadcrumbs}
      />
      <Separator size="xl" />
      <PostsCategory category={category} items={posts} base64Map={base64Map} />
    </Container>
  );
}
