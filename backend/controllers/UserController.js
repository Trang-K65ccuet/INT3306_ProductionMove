import { where } from "sequelize";
import User from "../models/UserModel.js";
import bcrypt from 'bcrypt';
import argon2 from 'argon2';
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
        const response = Users.findOne({
            attributes: ['id', 'name', 'username','position']
        })
    } catch (error) {
          res.status(500).json({msg: error.message});
    
    }
    try {
        await User.update({
            name: name,
            position: position,
            password: password
        }, {where : {
            id: user.id
        }})
    } catch (error) {
        
    }

    
}
export const postUser = async(req, res) => {
    const {id,name,username,position,password, confpassword} = req.body;
    if(password !== confpassword) return res.status(400).json({msg: "Password khác conf"});
    const hashPassword = await argon2.hash(password);
    try {
        await User.create({
            id: id,
            name: name,
            username: username,
            position: position,
            password: hashPassword,
            
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
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    try {
        await User.destroy({
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

