import { getClient } from "@/lib/apollo";
import { TestPostDocument } from "@/graphql";

const HomePage = async () => {
  const { data } = await getClient().query({
    query: TestPostDocument,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return <>{data?.post?.title}</>;
};

export default HomePage;
