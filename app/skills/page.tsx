import { getSkillsPageContent } from "@/services";

export const revalidate = 1;

export const metadata = {
  title: "All posts",
};

const SkillsPage = async () => {
  const data = await getSkillsPageContent();

  console.log(data);

  return <>Skills</>;
};

export default SkillsPage;
