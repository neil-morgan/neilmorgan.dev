// import { readFileSync } from "fs";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { gql } from "@apollo/client";
import { resolvers } from "./resolvers";
import { initializeMongoDB } from "@/lib/mongodb";

initializeMongoDB();

const typeDefs = gql`
  type PostData {
    _id: ID
    likes: Int
  }

  type Query {
    postsData: [PostData]
    postData(_id: ID): PostData
  }

  type Mutation {
    createPostData(_id: ID, likes: Int): PostData
    updatePostData(_id: ID, likes: Int): PostData
    deletePostData(_id: ID): PostData
  }
`;

// const typeDefs = readFileSync("app/api/server/schema.graphql", {
//   encoding: "utf-8",
// });

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export const GET = async (request: Request) => handler(request);
export const POST = async (request: Request) => handler(request);
