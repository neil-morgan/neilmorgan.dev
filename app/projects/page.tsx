import { PAGE_TITLE_PREFIX, LOCATIONS } from "@/lib/site";
import { Container, Separator } from "@/components/atoms";
import { PageHeader } from "@/components/molecules";

export const metadata = {
  title: `${PAGE_TITLE_PREFIX}`,
  description:
    "Design and development is in my DNA. I love to create, build and collaborate. Explore my site and discover how can I help you.",
};

export const revalidate = 5;

const ProjectsPage = async () => {
  const breadcrumbs = [
    { label: "Home", href: LOCATIONS.home },
    {
      label: "Projects",
    },
  ];

  return (
    <Container>
      <PageHeader
        kicker="Projects"
        title="Minim Lorem duis voluptate ad."
        subTitle="Nulla duis voluptate laborum mollit."
        breadcrumbs={breadcrumbs}
      />
      <Separator size="xl" />
    </Container>
  );
};

export default ProjectsPage;
