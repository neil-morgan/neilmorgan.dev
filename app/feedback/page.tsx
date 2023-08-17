import { getAllFeedbackContent } from "@/services";

export const revalidate = 1;

export const metadata = {
  title: "All posts",
};

const ProjectsPage = async () => {
  const data = await getAllFeedbackContent();

  console.log(data);

  return <>Projects</>;
};

export default ProjectsPage;
