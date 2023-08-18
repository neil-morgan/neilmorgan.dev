import { getClient } from "@/lib/apollo";
import { AllFeedbackDocument } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";

const { CMS } = APOLLO_CLIENTS;

export const getAllFeedback = async () => {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: AllFeedbackDocument,
  });

  return data?.allFeedback?.items;
};
