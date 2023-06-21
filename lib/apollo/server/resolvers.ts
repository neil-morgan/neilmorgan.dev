import { Post } from "@/lib/mongodb";

type unused = unknown;

export const resolvers = {
  Query: {
    posts: async () => await Post.find({}),
    post: async (_: unused, { _id }: { _id?: string }) =>
      await Post.findById(_id),
  },
  Mutation: {
    createPost: async (_: unused, args: { _id?: string; likes?: number }) => {
      const { _id } = args;
      const newPost = new Post({ _id, likes: 0 });
      await newPost.save();
      return newPost;
    },
    updatePost: async (_: unused, args: { _id?: string; likes?: number }) => {
      const { _id } = args;
      const result = await Post.findByIdAndUpdate(_id, args);
      return result;
    },
    deletePost: async (_: unused, args: { _id?: string }) => {
      const { _id } = args;
      const deletedPost = await Post.findByIdAndDelete(_id);
      if (!deletedPost) {
        throw new Error(`Post with ID ${_id} not found`);
      }
      return deletedPost;
    },
  },
};
