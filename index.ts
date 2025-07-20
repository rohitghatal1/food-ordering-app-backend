import mongoose from "mongoose";
import express from "express"
import dotenv from "dotenv"

import cors from "cors";


export const app = express();

app.use(cors());
app.use(express.json());

