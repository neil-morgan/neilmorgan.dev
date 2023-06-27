import { Post } from "@/lib/mongodb";

type unused = unknown;

// TODO: Tidy up the resolvers and types
// ? How would someone tests a graphql resolver?

export const resolvers = {
  Query: {
    postsData: async () => {
      console.log(true);
      return await Post.find({});
    },
    postData: async (_: unused, { _id }: { _id?: string }) =>
      await Post.findById(_id),
  },
  Mutation: {
    createPostData: async (
      _: unused,
      args: { _id?: string; likes?: number },
    ) => {
      const { _id, likes } = args;
      const newPost = new Post({ _id, likes });
      await newPost.save();
      return newPost;
    },
    updatePostData: async (
      _: unused,
      args: { _id?: string; likes?: number },
    ) => {
      const { _id } = args;
      const result = await Post.findByIdAndUpdate(_id, args);
      return result;
    },
    deletePostData: async (_: unused, args: { _id?: string }) => {
      const { _id } = args;
      const deletedPost = await Post.findByIdAndDelete(_id);
      if (!deletedPost) {
        throw new Error(`Post with ID ${_id} not found`);
      }
      return deletedPost;
    },
  },
};
