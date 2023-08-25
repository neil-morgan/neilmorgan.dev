import { getAllSkills } from "@/services";

export const revalidate = 1;

export const metadata = {
  title: "All skills",
};

const SkillsPage = async () => {
  const data = await getAllSkills();

  return <>{<pre>{JSON.stringify(data, null, 2)}</pre>}</>;
};

export default SkillsPage;
