import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { type PostResolverType } from "./types";
import { initializeMongoDB } from "@/lib/mongodb";
import { Post } from "@/lib/mongodb";

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

export const resolvers = {
  Query: {
    postsData: async () => {
      return await Post.find({});
    },

    postData: async (_: unknown, { _id }: PostResolverType) =>
      await Post.findById(_id),
  },

  Mutation: {
    createPostData: async (_: unknown, args: PostResolverType) => {
      const { _id, likes } = args;
      const newPost = new Post({ _id, likes });
      await newPost.save();
      return newPost;
    },

    updatePostData: async (_: unknown, args: PostResolverType) => {
      const { _id } = args;
      const result = await Post.findByIdAndUpdate(_id, args);
      return result;
    },

    deletePostData: async (_: unknown, args: PostResolverType) => {
      const { _id } = args;
      const deletedPost = await Post.findByIdAndDelete(_id);
      if (!deletedPost) {
        throw new Error(`Post with ID ${_id} not found`);
      }
      return deletedPost;
    },
  },
};

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
