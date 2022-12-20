 import User from "../../models/user/UserModel.js";
 import argon2 from 'argon2';
 import { where } from "sequelize";
 import bcrypt from 'bcrypt';
 import jwt from "jsonwebtoken";
 import dotenv from "dotenv";

dotenv.config();
// đăng nhập tài khoản sử dụng
export const Login = async (req, res)=> {
    const existUser = await User.findOne({
    where : {
            username: req.body.username
        }
    });
    if(!existUser) {return res.status(400).json({msg: "Không tồn tại tài khoản"})};
    const match = await argon2.verify(existUser.password, req.body.password);
    if(!match) return res.status(400).json({msg: "Wrong Password"});
    const token = jwt.sign({id: existUser.id, username: existUser.username, position: existUser.position}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "4h"
    });
    //tạo refresh token
    const refreshToken = jwt.sign({username: existUser.username, position: existUser.position}, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });
    // tạo jwt cho người sử dụng truy cập
    res.cookie("access_token", token,{ httpOnly: true } );
    const name = existUser.name;
    const id = existUser.id;
    const username = existUser.username;
    const position = existUser.position;
    return res.status(200).json({name,id,username,position, token})

}

//lấy profile của user
export const profile = async (req, res) =>{
    return res.json({ user: { username: req.userName, position: req.userPosition } });
}

//đăng xuất tài khoản
export const logOut = (req, res) =>{
   res.cookie('access_token','', {maxAge: 1});
   return res.status(200).json({msg: "Đăng xuất thành công"})
}