import { Food } from "../models/FoodModel";

export const getFoods = async (_: any, res: any) => {
  const foods = await Food.find();
  res.json(foods);
};

export const addFood = async (req: any, res: any) => {

  const food = new Food(req.body);
  await food.save();
  res.status(201).json(food);

};

export const deleteFood = async (req:any, res:any) => {

  
}
