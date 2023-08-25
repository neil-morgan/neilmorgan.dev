import { getAllProjects } from "@/services";

export const revalidate = 1;

export const metadata = {
  title: "All projects",
};

const ProjectsPage = async () => {
  const data = await getAllProjects();

  return <>{<pre>{JSON.stringify(data, null, 2)}</pre>}</>;
};

export default ProjectsPage;
