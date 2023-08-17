import { getClient } from "@/lib/apollo";
import {
  CreatePostDataByIdDocument,
  GetPostBySlugDocument,
  GetPostDataByIdDocument,
  type Post,
} from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";

const { CMS, DB } = APOLLO_CLIENTS;

export const getPostContent = async (
  slug: string,
  isPreviewMode: boolean,
) => {
  const { data: cmsData } = await getClient().query({
    context: { clientName: CMS, isPreviewMode },
    query: GetPostBySlugDocument,
    variables: { slug, preview: isPreviewMode },
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
    query: GetPostDataByIdDocument,
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

  return { ...postContent, likes };
};
