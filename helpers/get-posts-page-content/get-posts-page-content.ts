import { getClient } from "@/lib/apollo";
import { AllPostsDocument, type Post } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";
import { groupByCategory } from "@/helpers";

const { CMS } = APOLLO_CLIENTS;

export const getPostsPageContent = async () => {
  const { data: postsContent } = await getClient().query({
    context: { clientName: CMS },
    query: AllPostsDocument,
  });

  return groupByCategory(postsContent?.postCollection?.items as Post[]);
};
