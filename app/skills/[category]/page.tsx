import { CategoryMetaProps } from "@/types";
import { getAllSkillsCategory, getCategory, getSkill } from "@/services";

export const revalidate = 1;

export async function generateMetadata({ params }: CategoryMetaProps) {
  const data = await getCategory(params.category);
  return { title: `${data?.title} skills` };
}

export async function generateStaticParams() {
  const { slugs } = await getSkill();

  if (!slugs) {
    return [];
  }

  return slugs?.map(skill => ({
    category: skill?.category?.slug,
    slug: skill?.slug,
  }));
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
