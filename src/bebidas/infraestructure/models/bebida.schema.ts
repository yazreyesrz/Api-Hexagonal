import { Schema, model } from "mongoose";

const BeebidaSchema = new Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
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

const BebidaModel = model("bebidas", BeebidaSchema);

export default BebidaModel;
