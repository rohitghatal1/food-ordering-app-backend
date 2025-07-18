import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
});

export const Food = mongoose.model("Food", foodSchema);
