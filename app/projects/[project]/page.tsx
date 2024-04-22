import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import type { ProjectParamsType } from "./types";
import {
  ProjectDocument,
  ProjectsDocument,
  Project,
  type Skill,
  type RichtextType,
} from "@/service";
import { Container, Text, Separator } from "@/components/atoms";
import { PageHeader, Richtext } from "@/components/molecules";
import { fetchContent, extractImagesToBase64Map } from "@/helpers";
import { PAGE_TITLE_PREFIX, LOCATIONS } from "@/lib/site";

const tags = ["project"];
export const revalidate = 5;

export async function generateStaticParams() {
  const data = await fetchContent({
    document: ProjectsDocument,
    tags,
  });
  const { items } = data?.projects || {};
  if (!items) {
    return [];
  }
  return items?.map(item => ({
    project: item?.slug,
  }));
}

export async function generateMetadata({ params }: ProjectParamsType) {
  const { isEnabled } = draftMode();
  const data = await fetchContent({
    document: ProjectDocument,
    preview: isEnabled,
    variables: { slug: params.project, preview: isEnabled },
  });
  const project = data?.project?.items[0] as Project;

  return {
    title: `${PAGE_TITLE_PREFIX} | ${project?.heading}`,
    description: project?.description,
  };
}

export default async function ProjectPage({ params }: ProjectParamsType) {
  const { isEnabled: preview } = draftMode();
  const data = await fetchContent({
    document: ProjectDocument,
    preview,
    tags,
    variables: { slug: params.project },
  });

  const project = data.project?.items[0] as Project;

  if (!project) {
    return notFound();
  }

  const base64Map = await extractImagesToBase64Map(project);
  const breadcrumbs = [
    LOCATIONS.home,
    LOCATIONS.projects,
    { label: "Project" },
  ];

  return (
    <Container>
      {project.heading && (
        <PageHeader
          heading={project.heading}
          body={project.description}
          kicker="Project"
          breadcrumbs={breadcrumbs}
        />
      )}
      <Separator size="xl" />
    </Container>
  );
}
