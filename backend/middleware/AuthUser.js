import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();
export const authorizationUser = async (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
      return res.status(403).json({msg: "chưa đăng nhập"});
    }
    try {
      const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
      if(!data) return res.status(400).json({data});

      req.userName = data.username;
      req.userPosition = data.position;
      return next();
      
    } catch {
      return res.status(403).json({message: token, });
    }
  };
export const checkAdmin = async (req, res, next) => {
   if(req.userPosition == 'admin') return next();
   return res.status(403).json({msg: req.userPosition})
}