import { getClient } from "@/lib/apollo/client";
import {
  PostsByCategoryDocument,
  CategoryBySlugDocument,
  type Post,
} from "@/graphql/cms";
import { APOLLO_CLIENTS } from "@/constants";
import { Posts } from "@/components/organisms";
import { MetaProps } from "./types";

const { CMS } = APOLLO_CLIENTS;

export async function generateMetadata({ params }: MetaProps) {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: CategoryBySlugDocument,
    variables: {
      slug: params.category,
    },
  });
  return { title: `${data?.postCategoryCollection?.items[0]?.title} articles` };
}

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

  const groupedPosts = {
    category: params.category,
    items: data?.postCollection?.items as Post[],
  };

  return <Posts posts={groupedPosts} />;
}
