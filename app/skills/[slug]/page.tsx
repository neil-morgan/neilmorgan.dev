import { redirect } from "next/navigation";
import { draftMode } from "next/headers";
import { getFeatureFlags } from "@/helpers";
import type { SlugProps, SlugMetaProps } from "@/types";
import { SkillTemplate } from "@/components/templates";
import { getClient } from "@/lib/apollo";
import { SkillDocument, SkillSlugsDocument, type Skill } from "@/graphql";

export const revalidate = 1;

export async function generateMetadata({ params }: SlugMetaProps) {
  const { data } = await getClient().query({
    query: SkillDocument,
    variables: { slug: params.slug },
  });
  return { title: data?.skill?.items[0]?.title };
}

export async function generateStaticParams() {
  const { data } = await getClient().query({
    query: SkillSlugsDocument,
  });

  const { items } = data?.skillSlugs || {};

  if (!items) {
    return [];
  }

  return items?.map(skill => ({
    slug: skill?.slug,
  }));
}

const SkillPage = async ({ params }: SlugProps) => {
  const { skillsContent } = await getFeatureFlags();

  if (!skillsContent) {
    redirect("/");
  }

  const { isEnabled } = draftMode();
  const { data } = await getClient().query({
    context: { isPreviewMode: isEnabled },
    query: SkillDocument,
    variables: { slug: params.slug, preview: isEnabled },
  });

  return <SkillTemplate content={data?.skill?.items[0] as Skill} />;
};

export default SkillPage;
