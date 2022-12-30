import { where } from "sequelize";
import User from "../../models/user/UserModel.js";
import bcrypt from 'bcrypt';
import argon2 from 'argon2';
import { validationResult } from "express-validator";
export const getUsers = async (req, res) => {
    try {
        const resp = await User.findAll({
            attributes:['id','name','username','position','password']
        });
        res.status(200).json(resp);
        
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const getUserById = async (req, res) => {
    try {
        const response = await User.findOne({
            attributes:['id','name','username','position','password'],
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const updateUser = async (req, res) => {
    const {name,position, password} = req.body;
    try {
        const response = User.findOne({
            attributes: ['id', 'name', 'username','position']
        })
    } catch (error) {
          res.status(400).json({msg: error.message});
    
    }
    try {
        const hashPassword = await argon2.hash(password);
        await User.update({
            name: name,
            position: position,
            password: hashPassword
        }, {where : {
            id: req.params.id
        }})
        return res.status(200).json({msg: "Update người dùng thành công!"})
    } catch (error) {
        return res.status(400).json({msg: error})
    }

    
}
export const postUser = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {name,username,position,password, confpassword, status} = req.body;
    const existed = await User.findAndCountAll({
       
        where: {
            username: req.body.username
        }

    })
    if(existed.count != 0) return res.status(400).json({msg:  existed + (await existed).count});
    if(password !== confpassword) return res.status(400).json({msg: "Password khác conf"});
    const hashPassword = await argon2.hash(password);
    try {
        await User.create({
            id: null,
            name: name,
            username: username,
            position: position,
            password: hashPassword,
            status: status
            
        });
        res.status(201).json({msg: "Tạo user thành công"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
export const deleteUser = async(req, res) =>{
    const user = await User.findOne({
        attributes:['id','name','username','position','password'],
        where: {
            id: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User không tồn tại"});
    try {
        await User.destroy({
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg: "Xóa người dùng thành công"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

