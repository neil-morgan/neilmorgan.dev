import { draftMode } from "next/headers";
import type { SlugProps, MetaProps, PostProps } from "./types";
import { getClient } from "@/lib/apollo";
import { AllPostsSlugsDocument, PostDocument } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";
import { PostTemplate } from "@/components/templates";
import { buildRichtextHeadings } from "@/helpers";
import { getPost } from "@/services";

export const revalidate = 1;

const { CMS } = APOLLO_CLIENTS;

export async function generateMetadata({ params }: MetaProps) {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: PostDocument,
    variables: {
      slug: params.slug,
    },
  });
  return { title: data?.post?.items[0]?.title };
}

export async function generateStaticParams() {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: AllPostsSlugsDocument,
  });

  return data?.allPostsSlugs?.items.map(post => ({
    category: post?.category?.slug,
    slug: post?.slug,
  }));
}

const PostPage = async ({ params }: SlugProps) => {
  const { isEnabled } = draftMode();

  const content = (await getPost(params.slug, isEnabled)) as PostProps;

  return (
    <PostTemplate
      content={content}
      headings={buildRichtextHeadings(content?.body?.json.content)}
    />
  );
};

export default PostPage;
