import mongoose from "mongoose";

export const connectDb = () =>
  mongoose
    .connect(process.env.MONGODB_URI as string)
    .then(() => {
      console.log("✅ New connection established");
    })
    .catch(err => {
      console.log("❌ Connection to database failed");
      throw err;
    });
