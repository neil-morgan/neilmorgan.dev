import { getClient } from "@/lib/apollo/client";
import { AllPostsDocument, type Post } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";
import { groupPostsByCategory } from "@/helpers";
import { Posts } from "@/components/organisms";

const { CMS } = APOLLO_CLIENTS;
const { query } = getClient();

export const revalidate = 0;

export const metadata = {
  title: "All articles",
};

export default async function PostsPage() {
  const { data: postsContent } = await query({
    context: { clientName: CMS },
    query: AllPostsDocument,
    fetchPolicy: "cache-first",
  });

  const groupedPosts = groupPostsByCategory(
    postsContent?.postCollection?.items as Post[],
  );

  return <Posts posts={groupedPosts} />;
}
