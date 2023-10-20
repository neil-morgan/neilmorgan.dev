import { getClient } from "@/lib/apollo";
import { PostDocument, type Post } from "@/graphql";
import { APOLLO_CLIENTS } from "@/lib/site";

const { CMS } = APOLLO_CLIENTS;

export const getPost = async (slug?: string, isPreviewMode?: boolean) => {
  const { data: data } = await getClient().query({
    context: { clientName: CMS, isPreviewMode },
    query: PostDocument,
    variables: { slug: slug || "", preview: isPreviewMode },
  });

  return { post: data.post?.items[0] as Post, slugs: data.slugs?.items };
};
