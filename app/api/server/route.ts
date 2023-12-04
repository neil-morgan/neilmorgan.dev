import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";

import { schema } from "./schema";
import { connectDb } from "@/lib/mongodb";

connectDb();

const server = new ApolloServer({
  schema,
});

const handler = startServerAndCreateNextHandler(server);

export const GET = async (request: Request) => handler(request);
export const POST = async (request: Request) => handler(request);
