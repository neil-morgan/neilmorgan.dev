import { draftMode } from "next/headers";

export const GET = async (request: Request, response: Response) => {
  draftMode().disable();

  // const { slug } = request.query;

  // response.writeHead(307, { Location: slug });
  // response.end();
  return new Response("Draft mode is disabled");
};
