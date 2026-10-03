import { draftMode } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

import { PageContentBySlugDocument } from "@/app/_graphql/generated";
import { fetchContent } from "@/app/_helpers";
import { updateDebugConfig } from "@/app/_helpers/debugMenu";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slugParam = searchParams.get("slug");
  const redirectLocation = searchParams.get("redirect");

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }
  const draft = await draftMode();
  draft.enable();
  await updateDebugConfig({
    previewMode: true,
  });

  if (redirectLocation) {
    return redirect(redirectLocation);
  }

  const data = await fetchContent({
    document: PageContentBySlugDocument,
    variables: { slug: slugParam },
  });

  const { slug } = data.pageCollection?.items[0] || {};

  if (slug) {
    redirect(`/${slug}`, RedirectType.push);
  }

  return redirect("/");
};
