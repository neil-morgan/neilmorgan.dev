import { getAllSkills } from "@/services";

export const revalidate = 1;

export const metadata = {
  title: "All posts",
};

const SkillsPage = async () => {
  const data = await getAllSkills();

  return <>Skills</>;
};

export default SkillsPage;
