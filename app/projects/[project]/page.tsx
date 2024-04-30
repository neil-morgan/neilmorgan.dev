import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import type { ProjectParamsType } from "./types";
import {
  Content,
  Body,
  Aside,
  AsideStats,
  Actions,
  Introduction,
} from "./styles";
import {
  ProjectDocument,
  ProjectsDocument,
  Project,
  type RichtextType,
  type Skill,
} from "@/service";
import {
  Container,
  AspectImage,
  Separator,
  Button,
  Text,
  TagList,
} from "@/components/atoms";
import { PageHeader, Richtext, PodGroup } from "@/components/molecules";
import { fetchContent, extractImagesToBase64Map } from "@/helpers";
import { PAGE_TITLE_PREFIX, LOCATIONS } from "@/lib/site";
import { formatDate } from "@/utils";

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
      {project.image?.url &&
        project.image.description &&
        project.image.title && (
          <AspectImage
            url={project.image.url}
            fit="cover"
            description={project.image.description}
            blurDataUrl={base64Map[project.image?.title]}
          />
        )}

      <Content>
        <Introduction>
          <Text as="p">{project.introduction}</Text>
          <Aside>
            <AsideStats>
              <Text size={2} weight={600} color="$secondary1">
                Year:{" "}
                <Text as="span" color="$text">
                  {formatDate(project.date)}
                </Text>
              </Text>
              {project?.categories && (
                <TagList
                  list={project.categories.map(cat => ({
                    title: cat as string,
                  }))}
                />
              )}
            </AsideStats>

            <Actions>
              <Button leftIcon="Github">Github</Button>
              <Button leftIcon="Globe">Demo</Button>
            </Actions>
          </Aside>
        </Introduction>
        <Body>
          <Richtext
            content={project?.body as RichtextType}
            base64Map={base64Map}
          />
          <Separator size="sm" />
          <PodGroup
            heading="Tech stack"
            items={project.skillsUsedCollection?.items as Skill[]}
            base64Map={base64Map}
          />
        </Body>
      </Content>
    </Container>
  );
}
