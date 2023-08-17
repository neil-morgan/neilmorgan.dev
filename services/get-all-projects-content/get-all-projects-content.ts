import { getClient } from "@/lib/apollo";
import { GetAllProjectsDocument } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";

const { CMS } = APOLLO_CLIENTS;

export const getAllProjectsContent = async () => {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: GetAllProjectsDocument,
  });

  return data?.projectCollection?.items;
};
