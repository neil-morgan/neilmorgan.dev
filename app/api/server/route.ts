import { readFileSync } from "fs";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";
import { connectDb } from "@/lib/mongodb";

connectDb();

const typeDefs = readFileSync("app/api/server/schema.graphql", {
  encoding: "utf-8",
});

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
});

const handler = startServerAndCreateNextHandler(server);

export const GET = async (request: Request) => handler(request);
export const POST = async (request: Request) => handler(request);
