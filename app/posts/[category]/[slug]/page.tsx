import { draftMode } from "next/headers";
import type { SlugProps, MetaProps, PostProps } from "./types";
import { getClient } from "@/lib/apollo";
import { AllPostsSlugsDocument, PostBySlugDocument } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";
import { PostTemplate } from "@/components/templates";
import { getPostPageContent, buildRichtextHeadings } from "@/helpers";

export const revalidate = 1;

const { CMS } = APOLLO_CLIENTS;

export async function generateMetadata({ params }: MetaProps) {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: PostBySlugDocument,
    variables: {
      slug: params.slug,
    },
  });
  return { title: data?.postCollection?.items[0]?.title };
}

export async function generateStaticParams() {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: AllPostsSlugsDocument,
  });
  return data?.postCollection?.items.map(post => ({
    category: post?.category?.slug,
    slug: post?.slug,
  }));
}

const PostPage = async (context: SlugProps) => {
  const { isEnabled } = draftMode();

  const content = (await getPostPageContent(
    context.params.slug,
    isEnabled,
  )) as PostProps;

  return (
    <PostTemplate
      content={content}
      headings={buildRichtextHeadings(content?.body?.json.content)}
    />
  );
};

export default PostPage;
