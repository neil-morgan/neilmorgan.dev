import mongoose, { Schema } from "mongoose";
import type { IStudent } from "@/lib/mongodb/types";

const studentSchema: Schema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
});

export const Student =
  mongoose.models.Student || mongoose.model<IStudent>("Student", studentSchema);
