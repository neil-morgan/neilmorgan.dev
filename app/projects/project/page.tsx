import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { SkillDocument, type Skill, type RichtextType } from "@/service";
import { Container, Text, Separator } from "@/components/atoms";
import { PageHeader, Richtext } from "@/components/molecules";
import { fetchContent, extractImagesToBase64Map } from "@/helpers";
import { PAGE_TITLE_PREFIX, LOCATIONS } from "@/lib/site";

const tags = ["skill"];
export const revalidate = 5;

// export async function generateStaticParams() {
//   const data = await fetchContent({
//     document: SkillDocument,
//     tags,
//   });
//   const { items } = data?.project || {};
//   if (!items) {
//     return [];
//   }
//   return items?.map(item => ({
//     project: item?.slug,
//   }));
// }

// export async function generateMetadata({ params }: SkillParamsType) {
//   const { isEnabled } = draftMode();
//   const data = await fetchContent({
//     document: SkillDocument,
//     preview: isEnabled,
//     variables: { slug: params.skill, preview: isEnabled },
//   });
//   const skill = data?.skill?.items[0] as Skill;

//   return {
//     title: `${PAGE_TITLE_PREFIX} | ${skill?.title}`,
//     description: skill?.description,
//   };
// }

export default async function ProjectPage() {
  //   const { isEnabled: preview } = draftMode();
  //   const data = await fetchContent({
  //     document: SkillDocument,
  //     preview,
  //     tags,
  //     variables: { slug: params.skill },
  //   });

  //   const skill = data.skill?.items[0] as Skill;

  //   if (!skill) {
  //     return notFound();
  //   }

  //   const base64Map = await extractImagesToBase64Map(skill);
  //   const breadcrumbs = [
  //     { label: "Home", href: LOCATIONS.home },
  //     { label: "Skills", href: LOCATIONS.skills },
  //     { label: "Skill" },
  //   ];

  return <Container></Container>;
}
