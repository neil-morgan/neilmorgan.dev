import { redirect } from "next/navigation";
import { AllProjectsDocument } from "@/graphql";
import { getClient } from "@/lib/apollo";
import { getFeatureFlags } from "@/helpers";

export const revalidate = 1;

export const metadata = {
  title: "All projects",
};

const ProjectsPage = async () => {
  const { projectsContent } = await getFeatureFlags();

  if (!projectsContent) {
    redirect("/");
  }

  const { data } = await getClient().query({
    query: AllProjectsDocument,
  });

  return <>{<pre>{JSON.stringify(data, null, 2)}</pre>}</>;
};

export default ProjectsPage;
