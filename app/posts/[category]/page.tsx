import { MetaProps } from "./types";
import { getClient } from "@/lib/apollo/client";
import {
  CategoryBySlugDocument,
  CategoryPageDocument,
  type Post,
} from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";
import { Posts } from "@/components/organisms";
import type { CategoryType } from "@/types";

const { CMS } = APOLLO_CLIENTS;
const { query } = getClient();

export const revalidate = 0;

export async function generateMetadata({ params }: MetaProps) {
  const { data } = await query({
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
  const { data } = await query({
    context: { clientName: CMS },
    query: CategoryPageDocument,
    fetchPolicy: "cache-first",
    variables: {
      slug: params.category,
    },
  });

  const groupedPosts = {
    category: data?.postCategoryCollection?.items[0] as CategoryType,
    items: data?.postCollection?.items as Post[],
  };

  return <Posts posts={groupedPosts} />;
}
