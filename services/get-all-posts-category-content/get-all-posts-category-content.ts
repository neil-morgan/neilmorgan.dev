import { getClient } from "@/lib/apollo";
import { GetCategoryPageDocument, type PostCategory, type Post } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";
import type { GroupedPostType } from "@/types";

const { CMS } = APOLLO_CLIENTS;

export const getAllPostsCategoryContent = async (slug: string) => {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: GetCategoryPageDocument,
    fetchPolicy: "cache-first",
    variables: {
      slug,
    },
  });

  const groupedPosts: GroupedPostType = {
    category: data?.postCategoryCollection?.items[0] as PostCategory,
    items: data?.postCollection?.items as Post[],
  };

  return groupedPosts;
};
