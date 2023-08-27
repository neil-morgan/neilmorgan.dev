import { getClient } from "@/lib/apollo";
import { ProjectDocument, type Project } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";

const { CMS } = APOLLO_CLIENTS;

export const getProject = async (slug?: string, isPreviewMode?: boolean) => {
  const { data } = await getClient().query({
    context: { clientName: CMS, isPreviewMode },
    query: ProjectDocument,
    variables: { slug: slug || "", preview: isPreviewMode },
  });

  return {
    project: data.project?.items[0] as Project,
    slugs: data.slugs?.items,
  };
};
