import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import type { ProjectParamsType } from "./types";
import { Content, Aside, AsideStats, AsideDate, Actions } from "./styles";
import {
  ProjectDocument,
  ProjectsDocument,
  Project,
  type RichtextType,
} from "@/service";
import {
  Container,
  AspectImage,
  Separator,
  Button,
  Text,
  TagList,
} from "@/components/atoms";
import { PageHeader, Richtext } from "@/components/molecules";
import { fetchContent, extractImagesToBase64Map } from "@/helpers";
import { PAGE_TITLE_PREFIX, LOCATIONS } from "@/lib/site";
import { formatDate } from "@/utils";

const tags = ["content"];
export const revalidate = 5;
export const maxDuration = 30;

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
    title: `${PAGE_TITLE_PREFIX} | ${project?.title}`,
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
      {project.title && (
        <PageHeader
          title={project.title}
          heading={project.description}
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
        <Aside>
          <AsideStats>
            <AsideDate>
              <Text size={4} weight={500} color="$white">
                Date:
              </Text>
              <Text color="$secondary1">
                {formatDate(project.sys.firstPublishedAt)}
              </Text>
            </AsideDate>
            <Separator />
            <Text size={4} weight={500} color="$white">
              Categories:
            </Text>
            {project?.categories && (
              <TagList
                list={project.categories.map(cat => ({
                  title: cat as string,
                }))}
              />
            )}
            <Separator />
            <Text size={4} weight={500} color="$white">
              Skills used:
            </Text>
            {project.skillsUsedCollection?.items && (
              <TagList
                list={project.skillsUsedCollection?.items.map(cat => ({
                  title: cat?.title as string,
                }))}
              />
            )}
          </AsideStats>
          <Separator />
          <Actions>
            {project.githubLink && (
              <Button href={project.githubLink} size="sm" leftIcon="Github">
                Github
              </Button>
            )}
            {project.demoLink && (
              <Button size="sm" leftIcon="Globe">
                Demo
              </Button>
            )}
          </Actions>
        </Aside>

        <Richtext
          content={project?.body as RichtextType}
          base64Map={base64Map}
        />
      </Content>
    </Container>
  );
}
