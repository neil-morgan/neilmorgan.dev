import { getClient } from "@/lib/apollo/client";
import { AllPostsDocument, type Post } from "@/graphql/cms";
import { GetAllPostsDataDocument } from "@/graphql/db";
import { APOLLO_CLIENTS } from "@/constants";
import { groupPostsByCategory } from "@/helpers";
import { PostsTemplate } from "@/components/templates/PostsTemplate/PostsTemplate";

const { CMS, DB } = APOLLO_CLIENTS;

export default async function PostsPage() {
  const { query } = getClient();

  const { data: postsContent } = await query({
    context: { clientName: CMS },
    query: AllPostsDocument,
  });

  const { data: postsData } = await query({
    context: { clientName: DB },
    query: GetAllPostsDataDocument,
  });

  const posts = postsContent?.postCollection?.items as Post[];
  const groupedPosts = groupPostsByCategory(posts);

  return <PostsTemplate posts={groupedPosts} />;
}
