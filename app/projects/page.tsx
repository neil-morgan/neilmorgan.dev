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
import {
  ProjectsDocument,
  ProjectsPageDocument,
  type Project,
} from "@/service";
import { isNumberEven } from "@/utils";
import { NoticePage } from "@/components/templates";

export const metadata = {
  title: `${PAGE_TITLE_PREFIX}`,
  description:
    "Design and development is in my DNA. I love to create, build and collaborate. Explore my site and discover how can I help you.",
};

export const revalidate = 5;

const ProjectsPage = async () => {
  const { isEnabled: preview } = draftMode();

  const projectsData = await fetchContent({
    document: ProjectsDocument,
    preview,
  });

  const pageData = await fetchContent({
    document: ProjectsPageDocument,
    preview,
  });

  const [{ projects }, { header }] = await Promise.all([
    projectsData,
    pageData,
  ]);

  if (projects && projects?.items.length === 0) {
    return <NoticePage noticeType="noContent" />;
  }

  const breadcrumbs = [LOCATIONS.home, { label: "Projects" }];
  const base64Map = await extractImagesToBase64Map(
    projects?.items as Project[],
  );

  return (
    <Container>
      {header?.heading && (
        <PageHeader
          kicker={header?.kicker}
          heading={header?.heading}
          body={header?.body}
          breadcrumbs={breadcrumbs}
        />
      )}
      <Separator size="xl" />

      <ProjectsWrapper>
        {projects?.items.map((project, i) =>
          project?.heading &&
          project?.description &&
          project?.categories &&
          project?.slug &&
          project.image?.url &&
          project.image.title &&
          project.image.description ? (
            <ContentPresentation
              key={i}
              title={project.heading}
              body={project.description}
              cta={{ label: "More", href: `/projects/${project.slug}` }}
              tags={project.categories.map(cat => ({
                title: cat as string,
              }))}
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
