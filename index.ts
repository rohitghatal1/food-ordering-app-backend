import express from "express"
import dotenv from "dotenv"
import errorHandler from "./utils/errorHandler";
import authRoutes from "./routes/authRouth";
import foodRoutes from "./routes/foodRoutes";

dotenv.config();

export const app = express();

app.use(express.json());

app.use(errorHandler);

app.use("/api/auth", authRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/orders", orderRoutes);