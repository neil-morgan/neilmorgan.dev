import { getClient } from "@/lib/apollo";
import { GetAllFeedbackDocument } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";

const { CMS } = APOLLO_CLIENTS;

export const getAllFeedbackContent = async () => {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: GetAllFeedbackDocument,
  });

  return data?.feedbackCollection?.items;
};
