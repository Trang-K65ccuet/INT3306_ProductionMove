import bcrypt from 'bcrypt';
import { json } from 'sequelize';
import User from '../models/UserModel';
const signup = async (req, res) => {
 const {name, username,position, password} = req.body;
 try {
    const existedUser = await User.findOne({username : username})
    if(existedUser) {
        return res.status(400).json({message: "user already exists"});
    }
    const hashPassword = await bcrypt.hash(password, 10);

 } catch (error) {
    
 }

}