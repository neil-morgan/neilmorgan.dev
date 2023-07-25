import { draftMode } from "next/headers";
import type { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  draftMode().disable();

  const slug = new URL(request.url).searchParams.get("slug");

  if (slug) {
    return new Response(null, {
      status: 307,
      headers: { Location: slug },
    });
  } else {
    return new Response("Draft mode is disabled");
  }
};
