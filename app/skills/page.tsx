import { getAllSkills } from "@/services";
import { SkillsTemplate } from "@/components/templates";

export const revalidate = 1;

export const metadata = {
  title: "All skills",
};

const SkillsPage = async () => <SkillsTemplate skills={await getAllSkills()} />;

export default SkillsPage;
