 import User from "../models/UserModel.js";
 import argon2 from 'argon2';
 import { where } from "sequelize";
 import bcrypt from 'bcrypt';

export const Login = async (req, res)=> {
    const existUser = await User.findOne({
    
        where : {
            username: req.body.username
        }
    });
    if(!existUser) {return res.status(400).json({msg: "Không tồn tại tài khoản"})};
    //const match = await argon2.verify('$argon2i$v=19$m=4096', '$argon2i$v=19$m=4096');
    const match = await argon2.verify(existUser.password, req.body.password);
    if(!match) return res.status(400).json({msg: "Wrong Password"});
    req.session.username = existUser.username;
    req.session.save()
    const id = existUser.id;
    const name = existUser.name;
    const username = existUser.username;
    const position = existUser.position;
    return res.status(200).json({name,username,position})

}
export const SignOut = async (req,res) => {

}