import { PAGE_TITLE_PREFIX } from "@/lib/site";

export const metadata = {
  title: `${PAGE_TITLE_PREFIX}`,
  description:
    "Design and development is in my DNA. I love to create, build and collaborate. Explore my site and discover how can I help you.",
};

export const revalidate = 5;

const ProjectsPage = async () => {
  return <div>Projects</div>;
};

export default ProjectsPage;
