import { redirect } from "next/navigation";
import { getFeatureFlags, getAllFeedback } from "@/services";

export const revalidate = 1;

export const metadata = {
  title: "All posts",
};

const ProjectsPage = async () => {
  const { feedbackContent } = await getFeatureFlags();

  if (!feedbackContent) {
    redirect("/");
  }

  const data = await getAllFeedback();

  return <>{<pre>{JSON.stringify(data, null, 2)}</pre>}</>;
};

export default ProjectsPage;
