import { readFileSync } from "fs";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = readFileSync("app/api/server/schema.graphql", {
  encoding: "utf-8",
});

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
