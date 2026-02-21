import { User } from "../models/user.model";
import bcryptjs from "bcryptjs";
import { STATUS_CODES, SUCCESS_MESSAGES, ERROR_MESSAGES } from "../utils/constants.js";


export const SingUp = async (req,res) => {
    const {email,password,name} = req.body;
    try {
        if(!email || !password || !name){
            throw new Error("All fileds are requireed !")
        }
        
        const userAlreadyExsist = await User.findOne({email});

        if(userAlreadyExsist){
            return res.status(STATUS_CODES.BAD_REQUEST).json({success:false,message:ERROR_MESSAGES.USER_EXISTS});
        }

        const hashPassword = await bcryptjs.hash(password,10);

        const user = new User({
            email,
            password:hashPassword,
            name
        });

        await user.save();

    } catch (error) {
        res.status(STATUS_CODES.BAD_REQUEST).json({success:false,message:ERROR_MESSAGES.SERVER_ERROR});
    }
}

export const logIn = async (req,res) => {
    res.send("singup");
}

export const logOut = async (req,res) => {
    res.send("singup");
}