import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { PostFooter } from "./styles";
import type { PostParamsType } from "./types";
import { PostDocument, PostsDocument, type Post } from "@/service";
import { Container, Text, Separator } from "@/components/atoms";
import { NavigableRichtext } from "@/components/organisms";
import { PageHeader } from "@/components/molecules";
import { fetchContent, extractImagesToBase64Map } from "@/helpers";
import { LOCATIONS } from "@/lib/site";

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
    post: item?.slug,
  }));
}

export async function generateMetadata({ params }: PostParamsType) {
  const { isEnabled } = draftMode();
  const data = await fetchContent({
    document: PostDocument,
    preview: isEnabled,
    variables: { slug: params.post, preview: isEnabled },
  });
  const post = data?.post?.items[0] as Post;
  const title = post?.title;
  const description = post?.description;
  return { title, description };
}

export default async function PostPage({ params }: PostParamsType) {
  const { isEnabled: preview } = draftMode();
  const data = await fetchContent({
    document: PostDocument,
    preview,
    tags,
    variables: { slug: params.post },
  });

  const post = data.post?.items[0] as Post;

  if (!post) {
    return notFound();
  }

  const base64Map = await extractImagesToBase64Map(post);
  const breadcrumbs = [
    LOCATIONS.home,
    LOCATIONS.posts,
    {
      label: post.category?.title as string,
      slug: `${LOCATIONS.posts.slug}/${post.category?.slug}`,
    },
    { label: "Post" },
  ];

  return (
    <Container>
      {post.title && (
        <PageHeader
          kicker="Post"
          title={post.title}
          subTitle={post.description}
          breadcrumbs={breadcrumbs}
        />
      )}
      <Separator size="xl" />

      {post?.body && post?.image && (
        <NavigableRichtext
          content={post.body}
          base64Map={base64Map}
          image={post.image}
        />
      )}

      <PostFooter>
        <Text size={5} as="div" color="$secondary1">
          Thanks for reading!
        </Text>
      </PostFooter>
    </Container>
  );
}
