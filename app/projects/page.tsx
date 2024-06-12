import { draftMode } from "next/headers";
import { ProjectsWrapper } from "./styles";
import { PAGE_TITLE_PREFIX, LOCATIONS } from "@/lib/site";
import { Container, Separator } from "@/components/atoms";
import { ContentPresentation, PageHeader } from "@/components/molecules";
import { fetchContent, extractImagesToBase64Map } from "@/helpers";
import {
  ProjectsDocument,
  ProjectsPageDocument,
  type Project,
} from "@/service";
import { isNumberEven } from "@/utils";
import { NoticePage } from "@/components/templates";

export const metadata = {
  title: `Projects | ${PAGE_TITLE_PREFIX}`,
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
      {header?.title && (
        <PageHeader
          kicker={header?.kicker}
          title={header?.title}
          body={header?.body}
          breadcrumbs={breadcrumbs}
        />
      )}
      <Separator size="xl" />

      <ProjectsWrapper>
        {projects?.items.map((project, i) =>
          project?.title &&
          project?.description &&
          project?.categories &&
          project?.slug &&
          project.image?.url &&
          project.image.title &&
          project.date &&
          project.image.description ? (
            <ContentPresentation
              key={i}
              title={project.title}
              body={project.description}
              cta={{ label: "More", href: `/projects/${project.slug}` }}
              tags={project.categories.map(cat => ({
                title: cat as string,
              }))}
              date={project.date}
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
