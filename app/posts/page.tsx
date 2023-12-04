import { redirect } from "next/navigation";

import { PostsTemplate } from "@/components/templates";
import { getClient } from "@/lib/apollo";
import { AllPostsDocument, type Post } from "@/graphql";
import { groupByCategory, getFeatureFlags } from "@/helpers";

export const metadata = {
  title: "All posts",
};

const PostsPage = async () => {
  const { postsContent } = await getFeatureFlags();

  if (!postsContent) {
    redirect("/");
  }

  const { data } = await getClient().query({
    query: AllPostsDocument,
  });

  return (
    <PostsTemplate posts={groupByCategory(data?.posts?.items as Post[])} />
  );
};

export default PostsPage;
