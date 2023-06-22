import { getClient, ApolloWrapper } from "@/lib/apollo/client";
import { AllPostsSlugsDocument } from "@/graphql/cms";
import { APOLLO_CLIENTS } from "@/constants";
import { type PostPageProps } from "./types";
import { getPostContent } from "./helpers";
import { PostTemplate } from "@/templates";

const { CMS } = APOLLO_CLIENTS;
export const revalidate = 60;

export async function generateStaticParams() {
  const { data } = await getClient().query({
    context: { clientName: CMS },
    query: AllPostsSlugsDocument,
  });

  return data.postCollection?.items.map(post => ({
    slug: post?.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const content = await getPostContent(params.post);

  return (
    <ApolloWrapper>
      <PostTemplate content={content} />
    </ApolloWrapper>
  );
}
