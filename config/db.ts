import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI!)
        console.log("Mongo DB connected")
    } catch (err){
        console.error("DB Connection failed:", err)
        process.exit(1);
    }
}

export default connectDB