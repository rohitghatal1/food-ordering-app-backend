import express from "express"
import { getFoods } from "../controllers/foodController";
const {Router} = express;

const router = Router();

router.post("/food", async (req:any, res:any) =>{

})

router.delete("/food", async (req:any, res:any) => {

})

router.get("/food", getFoods);

export default router;