import { getAllPosts } from "@/services";
import { PostsTemplate } from "@/components/templates";

export const revalidate = 1;

export const metadata = {
  title: "All posts",
};

const PostsPage = async () => <PostsTemplate posts={await getAllPosts()} />;

export default PostsPage;
