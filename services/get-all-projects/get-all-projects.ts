import { getClient } from "@/lib/apollo";
import { AllProjectsDocument } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";

const { CMS } = APOLLO_CLIENTS;

export const getAllProjects = async () => {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: AllProjectsDocument,
  });

  return data?.allProjects?.items;
};
