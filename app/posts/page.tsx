import { getClient } from "@/lib/apollo";
import { AllPostsDocument, type Post } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";
import { groupPostsByCategory } from "@/helpers";
import { Posts } from "@/components/organisms";

export const revalidate = 1;

const { CMS } = APOLLO_CLIENTS;

export const metadata = {
  title: "All articles",
};

export default async function PostsPage() {
  const { data: postsContent } = await getClient().query({
    context: { clientName: CMS },
    query: AllPostsDocument,
  });

  const groupedPosts = groupPostsByCategory(
    postsContent?.postCollection?.items as Post[],
  );

  return (
    <>
      <Posts posts={groupedPosts} />
    </>
  );
}
