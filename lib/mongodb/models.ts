import mongoose, { Schema } from "mongoose";

const postSchema: Schema = new Schema({
  _id: String,
  likes: Number,
});

export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
