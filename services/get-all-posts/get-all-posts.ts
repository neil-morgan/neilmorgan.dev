import { getClient } from "@/lib/apollo";
import { AllPostsDocument, type Post } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";
import { groupByCategory } from "@/helpers";

const { CMS } = APOLLO_CLIENTS;

export const getAllPosts = async () => {
  const { data: postsContent } = await getClient().query({
    context: { clientName: CMS },
    query: AllPostsDocument,
  });

  return groupByCategory(postsContent?.allPosts?.items as Post[]);
};
