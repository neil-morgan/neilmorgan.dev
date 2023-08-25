import { getAllFeedback } from "@/services";

export const revalidate = 1;

export const metadata = {
  title: "All posts",
};

const ProjectsPage = async () => {
  const data = await getAllFeedback();

  return <>{<pre>{JSON.stringify(data, null, 2)}</pre>}</>;
};

export default ProjectsPage;
