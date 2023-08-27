import { getClient } from "@/lib/apollo";
import {
  AllPostsCategoryDocument,
  type PostCategory,
  type Post,
} from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";
import type { GroupedPostType } from "@/types";

const { CMS } = APOLLO_CLIENTS;

export const getAllPostsCategory = async (slug: string) => {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: AllPostsCategoryDocument,
    variables: {
      slug,
    },
  });

  const groupedPosts: GroupedPostType = {
    category: data?.posts?.items[0]?.category as PostCategory,
    items: data?.posts?.items as Post[],
  };

  return groupedPosts;
};
