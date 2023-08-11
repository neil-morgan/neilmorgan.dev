import { readFileSync } from "fs";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { resolvers } from "./resolvers";
import { initializeMongoDB } from "@/lib/mongodb";

initializeMongoDB();

const typeDefs = readFileSync("app/api/server/schema.graphql", {
  encoding: "utf-8",
});

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export const GET = async (request: Request) => handler(request);
export const POST = async (request: Request) => handler(request);
