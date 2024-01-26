import { Schema, model } from "mongoose";

const PostreSchema = new Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    uuid: {
      type: String,
      unique: true,
    },
    amount: {
      type: Number,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const PostreModel = model("postres", PostreSchema);

export default PostreModel;
