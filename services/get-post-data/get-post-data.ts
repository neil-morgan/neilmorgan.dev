import { getClient } from "@/lib/apollo";
import { CreatePostDataDocument, PostDataDocument } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";

const { DB } = APOLLO_CLIENTS;

export const getPostData = async (id: string) => {
  const {
    data: { postData: fetchedPostData },
  } = await getClient().query({
    context: { clientName: DB },
    query: PostDataDocument,
    variables: { id },
  });

  let dataSrc;

  if (!fetchedPostData) {
    const { data } = await getClient().mutate({
      context: { clientName: DB },
      mutation: CreatePostDataDocument,
      variables: { id, likes: 0 },
    });
    dataSrc = data?.createPostData;
  } else {
    dataSrc = fetchedPostData;
  }

  const { likes } = dataSrc || {};

  return { likes };
};
