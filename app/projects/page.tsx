import { getAllProjectsContent } from "@/services";

export const revalidate = 1;

export const metadata = {
  title: "All posts",
};

const ProjectsPage = async () => {
  const data = await getAllProjectsContent();

  console.log(data);

  return <>Projects</>;
};

export default ProjectsPage;
