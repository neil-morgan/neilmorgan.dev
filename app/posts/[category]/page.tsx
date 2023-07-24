import { getClient } from "@/lib/apollo/client";
import { PostsByCategoryDocument, type Post } from "@/graphql/cms";
import { APOLLO_CLIENTS } from "@/constants";
import { Posts } from "@/components/organisms";
import type { GroupedPostType } from "@/types";

const { CMS } = APOLLO_CLIENTS;

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: PostsByCategoryDocument,
    variables: {
      slug: params.category,
    },
  });

  const posts = data?.postCollection?.items as Post[];

  const groupedPosts = {
    category: params.category,
    items: posts,
  };

  //   return <div>asd</div>;
  return <Posts posts={groupedPosts} />;
}
