import { getClient, ApolloWrapper } from "@/lib/apollo/client";
import { AllPostsSlugsDocument } from "@/graphql/cms";
import { APOLLO_CLIENTS } from "@/constants";
import { type PostPageProps } from "./types";
import { LikeButton } from "@/components/atoms";
import { PostBySlugDocument } from "@/graphql/cms";
import {
  GetPostDataByIdDocument,
  CreatePostDataByIdDocument,
} from "@/graphql/db";

const { CMS, DB } = APOLLO_CLIENTS;
export const dynamic = "force-dynamic"; // * page does not use cache

export async function generateStaticParams() {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: AllPostsSlugsDocument,
  });

  return data.postCollection?.items.map(post => ({
    slug: post?.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { query, mutate } = getClient();

  const { data: cmsData } = await query({
    context: { clientName: CMS },
    query: PostBySlugDocument,
    variables: { slug: params.post },
  });

  const postContent = cmsData.postCollection?.items[0];
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

  const content = { ...postContent, likes };

  return (
    <ApolloWrapper>
      <LikeButton likes={content?.likes} id={content?.sys.id} />
    </ApolloWrapper>
  );
}
