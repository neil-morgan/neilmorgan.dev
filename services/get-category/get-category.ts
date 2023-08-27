import { getClient } from "@/lib/apollo";
import { CategoryDocument } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";

const { CMS } = APOLLO_CLIENTS;

export const getCategory = async (category: string) => {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: CategoryDocument,
    variables: {
      slug: category,
    },
  });

  return data?.skill?.items[0] || data?.post?.items[0];
};
