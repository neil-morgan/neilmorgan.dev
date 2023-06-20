import mongoose, { Schema } from "mongoose";

const studentSchema: Schema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
});

const postSchema: Schema = new Schema({
  id: String,
  likes: Number,
});

export const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
