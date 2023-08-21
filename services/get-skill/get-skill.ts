import { getClient } from "@/lib/apollo";
import { SkillDocument, type Skill } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";

const { CMS } = APOLLO_CLIENTS;

export const getSkill = async (slug: string, isPreviewMode: boolean) => {
  const { data } = await getClient().query({
    context: { clientName: CMS, isPreviewMode },
    query: SkillDocument,
    variables: { slug, preview: isPreviewMode },
  });

  return data.skill?.items[0] as Skill;
};
