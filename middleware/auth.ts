import {  Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticate = (req: any, res: Response, next: NextFunction) => {
  
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.sendStatus(401);
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    req.userId = decoded.id;
    next();

  } catch {
    res.sendStatus(403);
  }
};
