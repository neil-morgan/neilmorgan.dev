import { getClient } from "@/lib/apollo";
import { AllSkillsDocument, type Skill } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";
import { groupByCategory } from "@/helpers";

const { CMS } = APOLLO_CLIENTS;

export const getAllSkills = async () => {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: AllSkillsDocument,
  });

  const categories = groupByCategory(data?.allSkills?.items as Skill[]);

  return data?.allSkills?.items;
};
