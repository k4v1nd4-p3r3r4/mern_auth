import express from "express"

const router = express.Router();

router.post("/signup",(req,res)=>{
    console.log("Signup route called");
    res.status(200).json({
        message:"sign up",
        success: true
    });
});

router.post("/login",(req,res)=>{
    console.log("Login route called");
    res.status(200).json({
        message:"login",
        success: true
    });
});

router.post("/logout",(req,res)=>{
    console.log("Logout route called");
    res.status(200).json({
        message:"logout",
        success: true
    });
});

export default router;
