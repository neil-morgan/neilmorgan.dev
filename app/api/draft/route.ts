import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { getClient } from "@/lib/apollo/client";
import { APOLLO_CLIENTS } from "@/lib/site";
import { PostDocument } from "@/graphql";

const { query } = getClient();
const { CMS } = APOLLO_CLIENTS;

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  if (secret !== process.env.CONTENTFUL_PREVIEW_TOKEN || !slug) {
    return new Response("Invalid token", { status: 401 });
  }

  const { data } = await query({
    context: { clientName: CMS },
    query: PostDocument,
    variables: { slug },
  });

  const postCategory = data?.post?.items[0]?.category?.slug;
  const postSlug = data?.post?.items[0]?.slug;

  if (!data || !postSlug || !postCategory) {
    return new Response("Invalid slug", { status: 401 });
  }

  draftMode().enable();

  const redirectUrl = `/posts/${postCategory}/${postSlug}`;

  redirect(redirectUrl);
};
