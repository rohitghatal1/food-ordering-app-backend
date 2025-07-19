import { Order } from "../models/OrderModel";

export const placeOrder = async (req: any, res: any) => {

  const order = new Order({ ...req.body, user: req.userId });
  await order.save();
  res.status(201).json(order);
};

export const getOrders = async (req: any, res: any) => {
  const orders = await Order.find({ user: req.userId }).populate("items.food");
  res.json(orders);
};
