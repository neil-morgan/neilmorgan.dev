import { getClient } from "@/lib/apollo";
import { GetAllPostsDocument, type Post } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";
import { groupByCategory } from "@/helpers";

const { CMS } = APOLLO_CLIENTS;

export const getAllPostsContent = async () => {
  const { data: postsContent } = await getClient().query({
    context: { clientName: CMS },
    query: GetAllPostsDocument,
  });

  return groupByCategory(postsContent?.postCollection?.items as Post[]);
};
