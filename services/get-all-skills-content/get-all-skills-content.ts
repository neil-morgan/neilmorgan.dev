import { getClient } from "@/lib/apollo";
import { GetAllSkillsDocument } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";

const { CMS } = APOLLO_CLIENTS;

export const getAllSkillsContent = async () => {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: GetAllSkillsDocument,
  });

  return data?.skillCollection?.items;
};
