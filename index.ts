import errorHandler from "./utils/errorHandler";
const express = require("express");
const mongoose = require("mongoose");

import dotenv from "dotenv";

const cors = require("cors");
const http = require("http");

import authRoutes from "./routes/authRouth";
import orderRoutes from "./routes/orderRoutes";
import foodRoutes from "./routes/foodRoutes";

dotenv.config();
const app = express();
const server = http.createServer(app);


//middleware
app.use(cors());
app.use(express.json());


//Routes
app.get("/", (req: any, res: any) => {
  res.send(" backend is running!");
});

// user routes
app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);
app.use("/api/order/", orderRoutes);


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});

app.use(errorHandler);