import { getClient } from "@/lib/apollo";
import { AllPostsDocument, type Post } from "@/graphql";
import { APOLLO_CLIENTS } from "@/lib/site";
import { groupByCategory } from "@/helpers";

const { CMS } = APOLLO_CLIENTS;

export const getAllPosts = async () => {
  const { data: postsContent } = await getClient().query({
    context: { clientName: CMS },
    fetchPolicy: "no-cache",
    query: AllPostsDocument,
  });

  return groupByCategory(postsContent?.posts?.items as Post[]);
};
