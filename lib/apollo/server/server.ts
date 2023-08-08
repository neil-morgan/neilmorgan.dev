import { readFileSync } from "fs";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { resolvers } from "./resolvers";

const typeDefs = readFileSync("lib/apollo/server/schema.graphql", {
  encoding: "utf-8",
});

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export const serverHandler = startServerAndCreateNextHandler<NextRequest>(
  server,
  {
    context: async req => ({ req }),
  },
);
