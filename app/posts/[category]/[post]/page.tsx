import { getClient, ApolloWrapper } from "@/lib/apollo/client";
import { AllPostsSlugsDocument } from "@/graphql/cms";
import { APOLLO_CLIENTS } from "@/constants";
import { type PostPageProps, type PostProps } from "./types";
import { PostTemplate } from "@/components/templates";
import { PostBySlugDocument, type Post } from "@/graphql/cms";
import {
  GetPostDataByIdDocument,
  CreatePostDataByIdDocument,
} from "@/graphql/db";
import { getRichtextHeadings } from "@/helpers";

const { CMS, DB } = APOLLO_CLIENTS;
export const dynamic = "force-static";
export const revalidate = 1; // * revalidate every 1 second

export async function generateMetadata({
  params,
}: {
  params: { post: string };
}) {
  return { title: "abc" };
}

export async function generateStaticParams() {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: AllPostsSlugsDocument,
  });

  return data?.postCollection?.items.map(post => ({
    category: post?.category?.slug,
    post: post?.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { query, mutate } = getClient();

  const { data: cmsData } = await query({
    context: { clientName: CMS },
    query: PostBySlugDocument,
    variables: { slug: params.post },
  });

  const postContent = cmsData.postCollection?.items[0] as Post;
  if (!postContent) {
    return;
  }

  const postId = postContent.sys.id;

  const {
    data: { postData: fetchedPostData },
  } = await query({
    context: { clientName: DB },
    query: GetPostDataByIdDocument,
    fetchPolicy: "no-cache",
    variables: { id: postId },
  });

  let postData;

  if (!fetchedPostData) {
    const { data } = await mutate({
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

  return (
    <ApolloWrapper>
      <PostTemplate content={content} headings={headings} />
    </ApolloWrapper>
  );
}
