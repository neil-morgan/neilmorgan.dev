import { getClient } from "@/lib/apollo";
import {
  AllSkillCategoryItemsDocument,
  type SkillCategory,
  type Skill,
} from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";
import { groupByProficiency } from "@/helpers";

const { CMS } = APOLLO_CLIENTS;

export const getAllSkillCategoryItems = async (slug: string) => {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: AllSkillCategoryItemsDocument,
    fetchPolicy: "cache-first",
    variables: {
      slug,
    },
  });

  const groupedPosts = {
    category: data?.skills?.items[0]?.category as SkillCategory,
    items: groupByProficiency(data?.skills?.items as Skill[]),
  };

  return groupedPosts;
};
