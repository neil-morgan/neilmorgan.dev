import { getClient } from "@/lib/apollo/client";
import { PostBySlugDocument, type Post } from "@/graphql/cms";
import {
  GetPostDataByIdDocument,
  CreatePostDataByIdDocument,
  type PostData,
} from "@/graphql/db";
import { APOLLO_CLIENTS } from "@/constants";

const { DB, CMS } = APOLLO_CLIENTS;

export const getPostContent = async (slug: string) => {
  const { query, mutate } = getClient();

  const { data: cmsData } = await query({
    context: { clientName: CMS },
    query: PostBySlugDocument,
    variables: { slug },
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
      variables: { id: postId },
    });
    postData = data?.createPostData;
  } else {
    postData = fetchedPostData;
  }

  const { likes } = postData || {};

  const data = { ...postContent, likes };

  return data;
};
