import { Router } from "express";
import { register } from "../controllers/auth.controller";

const router = Router();

router.post("/register", register);

router.get("/register", (req,res)=>{
    res.send("Auth route working");
});

export default router;