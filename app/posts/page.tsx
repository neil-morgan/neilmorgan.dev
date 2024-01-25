import { getClient } from "@/lib/apollo";
import { AllPostsDocument, Post } from "@/graphql";
import { PostsTemplate } from "@/components/templates";
import { groupByCategory } from "@/helpers";
import { PAGE_TITLE_PREFIX } from "@/lib/site";

export const metadata = {
  title: `${PAGE_TITLE_PREFIX} Posts`,
};

const PostsPage = async () => {
  const { data } = await getClient().query({
    query: AllPostsDocument,
  });

  return (
    <PostsTemplate posts={groupByCategory(data?.posts?.items as Post[])} />
  );
};

export const revalidate = 5;
export default PostsPage;
