import mongoose, { Schema } from "mongoose";

const postSchema: Schema = new Schema({
  title: String,
  _id: String,
  likes: Number,
});

export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
