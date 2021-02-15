import { Document, model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: String,
    age: Number,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export interface User extends Document {
  name: string;
  age: number;
}

export default model<User>('User', userSchema);