import express from "express"
import dotenv from "dotenv"
import errorHandler from "./utils/errorHandler";

dotenv.config();

export const app = express();

app.use(express.json());

app.use(errorHandler);

