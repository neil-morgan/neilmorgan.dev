import { getAllSkillsContent } from "@/services";

export const revalidate = 1;

export const metadata = {
  title: "All posts",
};

const SkillsPage = async () => {
  const data = await getAllSkillsContent();

  console.log(data);

  return <>Skills</>;
};

export default SkillsPage;
