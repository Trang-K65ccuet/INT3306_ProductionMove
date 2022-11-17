import Users from "../models/UserModel.js";
import argon2 from 'argon2';
export const checkUser = async (req, res, next) =>{
   
    const user = await Users.findOne({
        attributes:['id','name','username','position'],
        where: {
            id: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User không tồn tại"});
    req.userId = user.id;
    req.role = user.role; 
    next();
}
