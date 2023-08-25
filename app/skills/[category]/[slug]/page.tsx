import { draftMode } from "next/headers";
import type { SlugProps, SlugMetaProps } from "@/types";
import { getSkill } from "@/services";
import { SkillTemplate } from "@/components/templates";

export const revalidate = 1;

export async function generateMetadata({ params }: SlugMetaProps) {
  const { skill } = await getSkill(params.slug);
  return { title: skill.title };
}

export async function generateStaticParams() {
  const { slugs } = await getSkill();
  return slugs?.map(skill => ({
    category: skill?.category?.slug,
    slug: skill?.slug,
  }));
}

const SkillPage = async ({ params }: SlugProps) => {
  const { isEnabled } = draftMode();
  const { skill } = await getSkill(params.slug, isEnabled);

  return <SkillTemplate content={skill} />;
};

export default SkillPage;
