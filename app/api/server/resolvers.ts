import { type PostResolverType } from "./types";
import { Post } from "@/lib/mongodb";

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
      console.log(args); // think this is only the likes, not the title or _id
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
