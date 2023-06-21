import { getClient } from "@/lib/apollo/client";
import { AllPostsSlugsDocument, PostBySlugDocument } from "@/graphql/cms";
import { GetDbPostByIdDocument, CreateDbPostByIdDocument } from "@/graphql/db";
import { APOLLO_CLIENTS } from "@/constants";

type PostPageProps = {
  params: { post: string };
};

export default async function PostPage({ params }: PostPageProps) {
  const { query, mutate } = getClient();

  const { data: cmsData } = await query({
    context: { clientName: APOLLO_CLIENTS.CMS },
    query: PostBySlugDocument,
    variables: { slug: params.post },
  });

  const content = cmsData.postCollection?.items[0];
  if (!content) {
    return;
  }

  const {
    title,
    sys: { id },
  } = content;

  // // get page from db using id - if undefined, create it
  const { data: dbData } = await query({
    context: { clientName: APOLLO_CLIENTS.DB },
    query: GetDbPostByIdDocument,
    variables: { id },
  });

  if (!dbData.post) {
    // ! CACHING ISSUE
    // ! perhaps need to revalidate after the mutation?
    const { data: foo } = await mutate({
      context: { clientName: APOLLO_CLIENTS.DB },
      mutation: CreateDbPostByIdDocument,
      variables: { id },
    });
  }

  return (
    <main>
      <div>{id}</div>
      <div>{title}</div>
    </main>
  );
}

export async function generateStaticParams() {
  const { data } = await getClient().query({
    context: { clientName: APOLLO_CLIENTS.CMS },
    query: AllPostsSlugsDocument,
  });

  return data.postCollection?.items.map(post => ({
    slug: post?.slug,
  }));
}
