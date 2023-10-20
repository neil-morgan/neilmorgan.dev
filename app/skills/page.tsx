import { redirect } from "next/navigation";
import { getAllSkills, getFeatureFlags } from "@/services";
import { SkillsTemplate } from "@/components/templates";

export const revalidate = 1;

export const metadata = {
  title: "All skills",
};

const SkillsPage = async () => {
  const { skillsContent } = await getFeatureFlags();

  if (!skillsContent) {
    redirect("/");
  }

  return <SkillsTemplate skills={await getAllSkills()} />;
};

export default SkillsPage;
