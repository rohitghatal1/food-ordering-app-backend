import { Request, Response } from "express";
import { Food } from "../models/FoodModel";

export const getFoods = async (_: Request, res: Response) => {
  const foods = await Food.find();
  res.json(foods);
};

export const addFood = async (req: Request, res: Response) => {
  const food = new Food(req.body);
  await food.save();
  res.status(201).json(food);
};
