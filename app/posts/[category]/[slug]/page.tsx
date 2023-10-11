import { draftMode } from "next/headers";
import type { SlugProps, SlugMetaProps } from "@/types";
import { PostTemplate } from "@/components/templates";
import { buildRichtextHeadings } from "@/helpers";
import { getPost, getPostData } from "@/services";

import { getClient } from "@/lib/apollo";
import { SlugsDocument } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";

const { CMS } = APOLLO_CLIENTS;

export const revalidate = 1;

export async function generateMetadata({ params }: SlugMetaProps) {
  const { post } = await getPost(params.slug);
  return { title: post.title };
}

export async function generateStaticParams() {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: SlugsDocument,
  });

  if (!data?.slugs?.items) {
    return [];
  }

  return data?.slugs?.items.map(post => ({
    category: post?.category?.slug,
    slug: post?.slug,
  }));
}

const PostPage = async ({ params }: SlugProps) => {
  const { isEnabled } = draftMode();
  const { post } = await getPost(params.slug, isEnabled);
  const { likes } = await getPostData(post.sys.id);

  return (
    <PostTemplate
      content={{ ...post, likes }}
      headings={buildRichtextHeadings(post.body?.json.content)}
    />
  );
};

export default PostPage;
