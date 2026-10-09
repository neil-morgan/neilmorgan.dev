import { cookies, draftMode } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

import { PageContentBySlugDocument } from "@/app/_graphql/generated";
import { fetchContent } from "@/app/_helpers";
import { updatePreviewConfig } from "@/app/_helpers/preview-mode";

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
  const cookieStore = await cookies();
  const draftCookie = cookieStore.get("__prerender_bypass");
  if (draftCookie) {
    cookieStore.set("__prerender_bypass", draftCookie.value, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      path: "/",
    });
  }
  await updatePreviewConfig({
    previewMode: true,
  });

  if (redirectLocation) {
    return redirect(redirectLocation);
  }

  const data = await fetchContent({
    document: PageContentBySlugDocument,
    variables: { slug: slugParam, pageType_exists: null },
  });

  const { slug, pageType } = data.pageCollection?.items[0] || {};

  if (slug) {
    const path = [
      ...(pageType ? [pageType.toLowerCase()] : []),
      ...slug.split("/").filter(Boolean),
    ].join("/");
    redirect(`/${path}`, RedirectType.push);
  }

  return redirect("/");
};
