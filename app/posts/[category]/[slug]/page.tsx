import { redirect } from "next/navigation";
import { draftMode } from "next/headers";
import type { SlugProps, SlugMetaProps } from "@/types";
import { PostTemplate } from "@/components/templates";
import { getFeatureFlags } from "@/helpers";
import { getClient } from "@/lib/apollo";
import {
  CategoryDocument,
  PostDocument,
  Post,
  CreatePostDataDocument,
  PostSlugsDocument,
  PostDataDocument,
} from "@/graphql";
import { APOLLO_CLIENTS } from "@/lib/site";

export async function generateMetadata({ params }: SlugMetaProps) {
  const { data } = await getClient().query({
    query: CategoryDocument,
    variables: { slug: params.category },
  });
  return { title: data?.post?.items[0]?.title };
}

export async function generateStaticParams() {
  const { data } = await getClient().query({
    query: PostSlugsDocument,
  });
  const { items } = data?.postSlugs || {};

  if (!items) {
    return [];
  }

  return items?.map(post => ({
    category: post?.category?.slug,
    slug: post?.slug,
  }));
}

const PostPage = async ({ params }: SlugProps) => {
  const { postsContent } = await getFeatureFlags();

  if (!postsContent) {
    redirect("/");
  }

  const { isEnabled } = draftMode();

  const { data } = await getClient().query({
    context: { isPreviewMode: isEnabled },
    query: PostDocument,
    variables: { slug: params.slug, preview: isEnabled },
  });

  const post = data.post?.items[0] as Post;

  const {
    data: { postData: fetchedPostData },
  } = await getClient().query({
    context: { clientName: APOLLO_CLIENTS.DB },
    query: PostDataDocument,
    variables: { id: post.sys.id },
  });

  let dataSrc;

  if (!fetchedPostData) {
    const { data } = await getClient().mutate({
      context: { clientName: APOLLO_CLIENTS.DB },
      mutation: CreatePostDataDocument,
      variables: { title: post.title, id: post.sys.id, likes: 0 },
    });
    dataSrc = data?.createPostData;
  } else {
    dataSrc = fetchedPostData;
  }

  const { likes } = dataSrc ?? {};

  console.log(likes);

  return <PostTemplate content={{ ...post, likes: likes! }} />;
};

export default PostPage;
