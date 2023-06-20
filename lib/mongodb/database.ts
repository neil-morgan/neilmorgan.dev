import mongoose from "mongoose";

export const initializeMongoDB = () =>
  mongoose
    .connect(process.env.MONGODB_URI as string)
    .then(() => {
      console.log(`Db Connected`);
    })
    .catch((err) => {
      console.log(err.message);
    });
