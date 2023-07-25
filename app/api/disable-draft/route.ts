import { draftMode } from "next/headers";

export const GET = async (request: Request) => {
  draftMode().disable();
  return new Response("Draft mode is disabled");
};
