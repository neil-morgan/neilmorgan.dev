import { MetaProps } from "./types";
import { getClient } from "@/lib/apollo";
import { GetCategoryBySlugDocument } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";
import { Posts } from "@/components/organisms";
import { getAllPostsCategoryContent } from "@/services";

export const revalidate = 1;

const { CMS } = APOLLO_CLIENTS;

export async function generateMetadata({ params }: MetaProps) {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: GetCategoryBySlugDocument,
    variables: {
      slug: params.category,
    },
  });
  return { title: `${data?.postCategoryCollection?.items[0]?.title} articles` };
}

const PostCategoryPage = async ({
  params,
}: {
  params: { category: string };
}) => <Posts posts={await getAllPostsCategoryContent(params.category)} />;

export default PostCategoryPage;
