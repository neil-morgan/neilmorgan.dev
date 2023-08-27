import { CategoryMetaProps } from "@/types";
import { getAllSkillsCategory, getCategory } from "@/services";

export const revalidate = 1;

export async function generateMetadata({ params }: CategoryMetaProps) {
  const data = await getCategory(params.category);
  return { title: `${data?.title} skills` };
}

const SkillCategoryPage = async ({
  params,
}: {
  params: { category: string };
}) => {
  const data = await getAllSkillsCategory(params.category);

  return <>{<pre>{JSON.stringify(data, null, 2)}</pre>}</>;
};

export default SkillCategoryPage;
