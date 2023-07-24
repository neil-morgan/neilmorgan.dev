import { getClient } from "@/lib/apollo/client";
import { AllPostsDocument, type Post } from "@/graphql/cms";
import { APOLLO_CLIENTS } from "@/constants";
import { groupPostsByCategory } from "@/helpers";
import { Posts } from "@/components/organisms";

const { CMS } = APOLLO_CLIENTS;

export const revalidate = 1;
export const fetchCache = "force-no-store";

export default async function PostsPage() {
  const { query } = getClient();

  const { data: postsContent } = await query({
    context: { clientName: CMS },
    query: AllPostsDocument,
  });

  const posts = postsContent?.postCollection?.items as Post[];
  const groupedPosts = groupPostsByCategory(posts);

  return <Posts posts={groupedPosts} />;
}
