import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      food: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
      quantity: Number,
    },
  ],
  totalPrice: Number,
  status: { type: String, default: "pending" },
});

export const Order = mongoose.model("Order", orderSchema);
