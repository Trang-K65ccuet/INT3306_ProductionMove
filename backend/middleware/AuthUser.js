import User from "../models/user/UserModel.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();
//check xem người dùng đã đăng nhập hay chưa
export const authorizationUser = async (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
      return res.status(403).json({msg: "chưa đăng nhập"});
    }
    try {
      const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
      if(!data) return res.status(400).json({data});
      
      req.Id = data.id;
      req.userName = data.username;
      req.userPosition = data.position;
      return next();
      
    } catch {
      return res.status(403).json({message: token, });
    }
  };
  
// check xem người dùng có phải là admin hay không
export const checkAdmin = async (req, res, next) => {
   if(req.userPosition == 'admin') return next();
   return res.status(403).json({msg: req.userPosition + " Không có quyền truy cập"})
}

export const checkCssx = async (req, res, next) => {
  if (req.userPosition == 'cssx') return next();
  return res.status(403).json({msg: req.userPosition + " không được phép tạo các lô hàng"})
}
