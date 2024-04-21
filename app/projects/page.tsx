import { draftMode } from "next/headers";
import { ProjectsWrapper } from "./styles";
import { PAGE_TITLE_PREFIX, LOCATIONS, INFO_MESSAGES } from "@/lib/site";
import { Container, Separator } from "@/components/atoms";
import {
  ContentPresentation,
  PageHeader,
  InfoMessage,
} from "@/components/molecules";
import { fetchContent, extractImagesToBase64Map } from "@/helpers";
import { ProjectsDocument, type Project, type TagType } from "@/service";
import { isNumberEven } from "@/utils";

export const metadata = {
  title: `${PAGE_TITLE_PREFIX}`,
  description:
    "Design and development is in my DNA. I love to create, build and collaborate. Explore my site and discover how can I help you.",
};

export const revalidate = 5;

const ProjectsPage = async () => {
  const { isEnabled: preview } = draftMode();

  const { projects } = await fetchContent({
    document: ProjectsDocument,
    preview,
  });

  if (projects && projects?.items.length === 0) {
    return <InfoMessage {...INFO_MESSAGES.noContent} />;
  }

  const breadcrumbs = [LOCATIONS.home, { label: "Projects" }];
  const base64Map = await extractImagesToBase64Map(
    projects?.items as Project[],
  );

  return (
    <Container>
      <PageHeader
        kicker="Projects"
        heading="Minim Lorem duis voluptate ad."
        body="Nulla duis voluptate laborum mollit."
        breadcrumbs={breadcrumbs}
      />
      <Separator size="xl" />

      <ProjectsWrapper>
        {projects?.items.map((project, i) =>
          project?.heading &&
          project?.description &&
          project?.slug &&
          project.image?.url &&
          project.image.title &&
          project.image.description ? (
            <ContentPresentation
              key={i}
              title={project.heading}
              body={project.description}
              cta={{ label: "See more", href: `/projects/${project.slug}` }}
              label="Project"
              tags={project.skillsUsedCollection?.items as TagType[]}
              reverse={!isNumberEven(i)}
              image={{
                url: project.image.url,
                description: project.image.description,
                blurDataUrl: base64Map[project.image?.title],
              }}
            />
          ) : null,
        )}
      </ProjectsWrapper>
    </Container>
  );
};

export default ProjectsPage;
