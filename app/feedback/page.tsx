import { redirect } from "next/navigation";
import { getFeatureFlags } from "@/helpers";
import { getClient } from "@/lib/apollo";
import { AllFeedbackDocument } from "@/graphql";

export const revalidate = 1;

export const metadata = {
  title: "All posts",
};

const ProjectsPage = async () => {
  const { feedbackContent } = await getFeatureFlags();

  if (!feedbackContent) {
    redirect("/");
  }

  const { data } = await getClient().query({
    query: AllFeedbackDocument,
  });

  return <>{<pre>{JSON.stringify(data, null, 2)}</pre>}</>;
};

export default ProjectsPage;
