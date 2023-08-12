import { getPostsPageContent } from "@/services";
import { Posts } from "@/components/organisms";

export const revalidate = 1;

export const metadata = {
  title: "All posts",
};

const PostsPage = async () => <Posts posts={await getPostsPageContent()} />;

export default PostsPage;
