import { type PostResolverType } from "./types";
import { Post } from "@/lib/mongodb";

export const resolvers = {
  Query: {
    postData: async (_: unknown, { _id }: PostResolverType) =>
      await Post.findById(_id),

    postsData: async () => await Post.find({}),

    postsDataByIds: async (_: unknown, { _ids }: PostResolverType) =>
      await Post.find({
        _id: {
          $in: _ids,
        },
      }),
  },

  Mutation: {
    createPostData: async (_: unknown, args: PostResolverType) => {
      const newPost = new Post(args);
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
