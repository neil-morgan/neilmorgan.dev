import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { PostDocument } from "@/graphql";
import { fetchContent } from "@/helpers";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  const redirectLocation = searchParams.get("redirect");

  if (secret !== process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  draftMode().enable();

  if (redirectLocation) {
    redirect(redirectLocation);
  }

  const data = await fetchContent({
    document: PostDocument,
    variables: { slug, preview: true },
    preview: true,
  });
  const postCategory = data?.post?.items[0]?.category?.slug;

  if (postCategory) {
    redirect(`/posts/${postCategory}/${slug}`);
  }

  redirect("/");
};
