import { camelCase } from "lodash";
import { getClient } from "@/lib/apollo";
import { FeatureFlagsDocument } from "@/graphql";
import { APOLLO_CLIENTS } from "@/lib/site";

const { CMS } = APOLLO_CLIENTS;

type FeatureFlags = {
  feedbackContent?: boolean;
  skillsContent?: boolean;
  postsContent?: boolean;
  projectsContent?: boolean;
};

export const getFeatureFlags = async (): Promise<FeatureFlags> => {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: FeatureFlagsDocument,
  });

  const result: { [x: string]: boolean } = {};

  data?.featureFlags?.items.forEach(item => {
    if (!item?.name) {
      return;
    }
    result[camelCase(item.name)] = item.active as boolean;
  });

  return result;
};
