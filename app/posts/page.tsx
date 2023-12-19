import { getClient } from "@/lib/apollo";
import { AllPostsDocument } from "@/graphql";

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

  return <>{data?.posts?.items[0]?.title}</>;
};

export default PostsPage;
