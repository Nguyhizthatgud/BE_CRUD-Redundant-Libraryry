import mongoose from "mongoose";
const Schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publicyear: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
export const Book = mongoose.model("Book", Schema);
