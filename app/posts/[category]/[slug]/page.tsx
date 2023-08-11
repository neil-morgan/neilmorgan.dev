import { draftMode } from "next/headers";
import { type SlugProps, type PostProps, type MetaProps } from "./types";
import { getClient } from "@/lib/apollo";
import {
  AllPostsSlugsDocument,
  CreatePostDataByIdDocument,
  PostBySlugDocument,
  PostDataByIdDocument,
  type Post,
} from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";
import { PostTemplate } from "@/components/templates";
import { getRichtextHeadings } from "@/helpers";

export const revalidate = 1;

const { CMS, DB } = APOLLO_CLIENTS;

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

export default async function Slug(context: SlugProps) {
  const { isEnabled } = draftMode();
  const { data: cmsData } = await getClient().query({
    context: { clientName: CMS, isPreviewMode: isEnabled },
    query: PostBySlugDocument,
    variables: { slug: context.params.slug, preview: isEnabled },
  });

  const postContent = cmsData.postCollection?.items[0] as Post;
  if (!postContent) {
    return;
  }

  const postId = postContent.sys.id;

  const {
    data: { postData: fetchedPostData },
  } = await getClient().query({
    context: { clientName: DB },
    query: PostDataByIdDocument,
    variables: { id: postId },
  });

  let postData;

  if (!fetchedPostData) {
    const { data } = await getClient().mutate({
      context: { clientName: DB },
      mutation: CreatePostDataByIdDocument,
      variables: { id: postId, likes: 0 },
    });
    postData = data?.createPostData;
  } else {
    postData = fetchedPostData;
  }

  const { likes } = postData || {};

  const content = { ...postContent, likes } as PostProps;
  const headings = getRichtextHeadings(content.body?.json.content);

  return <PostTemplate content={content} headings={headings} />;
}
