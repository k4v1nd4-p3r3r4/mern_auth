import express from "express"
import { SingUp,logIn,logOut } from "../controller/auth.controller";
const router = express.Router();

router.post("/signup",SingUp);

router.post("/login",logIn);

router.post("/logout",logOut);

export default router;
