import { User } from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";


export const register = async (req,res) => {
    try {
        const {fullName, email, password} = req.body;
        if(!fullName || !email || !password){
            return res.status(403).json({
                success: false,
                message:"All fields are required."
            })
        }
        //if user is already register
        const user = await User.findOne({email});
        if(user){
            return res.status(403).json({
                success: false,
                message:"Aready Register!"
            })

        }
        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullName, //exact same as models
            email,
            password:hashedPassword
        });

        return res.status(201).json({
            success: true,
            message:"Account created successfully."
        })
    } catch (error) {
        console.log(error);
    }
};

export const login = async (req,res) => {
    try {

        // console.log(req);
        res.set("channelName","ShrutiAyush")
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(403).json({
                success:false,
                message:"All fields are required!",
            });
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(403).json({
                success: false,
                message:"Incorrect email or password!",
            });
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password);//return true or false
        if(!isPasswordMatch){
            return res.status(403).json({
                success: false,
                message:"Incorrect email or password",
            });
        }
        const token = await jwt.sign({userId:user._id}, process.env.SECRET_KEY,{expiresIn:'1d'});
        return res.status(200).cookie("token", token,{
            httpOnly:true,
            sameSite:"strict",
            maxAge:24*60*60*1000
        }).json({
            success:true,
            message:`Welcome back ${user.fullName}`
        })
    } catch (error) {
        
    }
}

export const logout = async (_,res) =>{
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            success:true,
            message:"User logout successfully .",
        });
    } catch (error) {
        console.log(error);
    }
}

//brcrypt :-- A library to help you hash passwords.
//40 min