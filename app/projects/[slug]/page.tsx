import { draftMode } from "next/headers";
import type { SlugProps, SlugMetaProps } from "@/types";
import { getProject } from "@/services";

export const revalidate = 1;

export async function generateMetadata({ params }: SlugMetaProps) {
  const { project } = await getProject(params.slug);
  return { title: project.title };
}

export async function generateStaticParams() {
  const { slugs } = await getProject();

  if (!slugs) {
    return [];
  }

  return slugs?.map(skill => ({
    slug: skill?.slug,
  }));
}

const ProjectPage = async ({ params }: SlugProps) => {
  const { isEnabled } = draftMode();
  const { project } = await getProject(params.slug, isEnabled);

  return <pre>{JSON.stringify(project, null, 2)}</pre>;
};

export default ProjectPage;
