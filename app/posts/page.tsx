import { redirect } from "next/navigation";
import { getAllPosts, getFeatureFlags } from "@/services";
import { PostsTemplate } from "@/components/templates";

export const revalidate = 1;

export const metadata = {
  title: "All posts",
};

const PostsPage = async () => {
  const { postsContent } = await getFeatureFlags();

  if (!postsContent) {
    redirect("/");
  }

  return <PostsTemplate posts={await getAllPosts()} />;
};

export default PostsPage;
