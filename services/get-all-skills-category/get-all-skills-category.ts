import { getClient } from "@/lib/apollo";
import { AllSkillsCategoryDocument, type Skill } from "@/graphql";
import type { CategoryType } from "@/types";
import { APOLLO_CLIENTS } from "@/constants";
import { groupByProficiency } from "@/helpers";

const { CMS } = APOLLO_CLIENTS;

export const getAllSkillsCategory = async (slug: string) => {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: AllSkillsCategoryDocument,
    fetchPolicy: "cache-first",
    variables: {
      slug,
    },
  });

  const groupedPosts = {
    category: data?.skills?.items[0]?.category as CategoryType,
    items: groupByProficiency(data?.skills?.items as Skill[]),
  };

  return groupedPosts;
};
