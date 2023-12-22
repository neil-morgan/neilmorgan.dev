import { getClient } from "@/lib/apollo";
import { AllPostsDocument, Post } from "@/graphql";
import { PostsTemplate } from "@/components/templates";
import { groupByCategory } from "@/helpers";

export const metadata = {
  title: "All posts",
};

const PostsPage = async () => {
  const { data } = await getClient().query({
    query: AllPostsDocument,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return (
    <PostsTemplate posts={groupByCategory(data?.posts?.items as Post[])} />
  );
};

export default PostsPage;
