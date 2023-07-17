import { Post } from "@/lib/mongodb";
import { type PostResolverType } from "./types";

export const resolvers = {
  Query: {
    postsData: async () => {
      console.log(true);
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
