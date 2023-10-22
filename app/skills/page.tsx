import { redirect } from "next/navigation";
import { SkillsTemplate } from "@/components/templates";
import { AllSkillsDocument, type Skill } from "@/graphql";
import { getClient } from "@/lib/apollo";
import {
  groupByCategory,
  groupByProficiency,
  getFeatureFlags,
} from "@/helpers";
import type { CategoryType } from "@/types";

export const revalidate = 1;

export const metadata = {
  title: "All skills",
};

const SkillsPage = async () => {
  const { skillsContent } = await getFeatureFlags();

  if (!skillsContent) {
    redirect("/");
  }

  const { data } = await getClient().query({
    query: AllSkillsDocument,
  });

  return (
    <SkillsTemplate
      skills={groupByCategory(data?.allSkills?.items as Skill[]).map(item => ({
        category: item.category as CategoryType,
        items: groupByProficiency(item.items),
      }))}
    />
  );
};

export default SkillsPage;
