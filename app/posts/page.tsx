import { getClient } from "@/lib/apollo/client";
import { AllPostsDocument } from "@/graphql/cms";
import { GetAllPostsDataDocument } from "@/graphql/db";
import { APOLLO_CLIENTS } from "@/constants";

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

  console.log(postsContent);
  console.log(postsData);

  return <div>Posts page</div>;
}
