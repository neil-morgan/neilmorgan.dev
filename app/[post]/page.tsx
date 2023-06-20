import { getClient } from "@/lib/apollo/client";
import { AllPostsSlugsDocument, PostBySlugDocument } from "@/graphql";
import { APOLLO_CLIENTS } from "@/constants";

type PostPageProps = {
  params: { post: string };
};

export default async function PostPage({ params }: PostPageProps) {
  const { data } = await getClient().query({
    context: { clientName: APOLLO_CLIENTS.CMS },
    query: PostBySlugDocument,
    variables: { slug: params.post },
  });
  const content = data.postCollection?.items[0];
  if (!content) {
    return;
  }

  const {
    title,
    sys: { id },
  } = content;

  // get page from db using id - if undefined, create it

  return (
    <div>
      <div>{id}</div>
      <div>{title}</div>
    </div>
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
