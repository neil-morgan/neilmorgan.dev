import { getClient } from "@/lib/apollo";
import { AllSkillsDocument, type Skill } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";
import { groupByCategory, groupByProficiency } from "@/helpers";
import type { CategoryType } from "@/types";

const { CMS } = APOLLO_CLIENTS;

export const getAllSkills = async () => {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: AllSkillsDocument,
  });

  return groupByCategory(data?.allSkills?.items as Skill[]).map(item => ({
    category: item.category as CategoryType,
    items: groupByProficiency(item.items),
  }));
};
