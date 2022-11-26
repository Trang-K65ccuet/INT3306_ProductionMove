 import User from "../models/UserModel.js";
 import argon2 from 'argon2';
 import { where } from "sequelize";
 import bcrypt from 'bcrypt';
 import jwt from "jsonwebtoken";
 import dotenv from "dotenv";

dotenv.config();
export const Login = async (req, res)=> {
    const existUser = await User.findOne({
    
        where : {
            username: req.body.username
        }
    });
    if(!existUser) {return res.status(400).json({msg: "Không tồn tại tài khoản"})};
    const match = await argon2.verify(existUser.password, req.body.password);
    if(!match) return res.status(400).json({msg: "Wrong Password"});
    const token = jwt.sign({username: existUser.username, position: existUser.position}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "2h"
    })
   
    res.cookie("access_token", token, )
    
    const name = existUser.name;
    const username = existUser.username;
    const position = existUser.position;
    return res.status(200).json({name,username,position, token})

}
export const profile = async (req, res) =>{
    return res.json({ user: { username: req.userName, position: req.userPosition } });

}
export const SignOut = async (req,res) => {

}

export const logOut = (req, res) =>{
   
}