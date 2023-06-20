import { Document } from "mongoose";

export interface IStudent extends Document {
  firstName: string;
  lastName: string;
  age: number;
}
