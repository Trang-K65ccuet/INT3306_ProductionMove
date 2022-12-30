import express from "express";
import { profile, Login, logOut } from "../controllers/authentication/AuthController.js";
import { authorizationUser } from "../middleware/AuthUser.js";
import { body, validationResult, check} from 'express-validator';
import { checkLogin, checkRegisterForm} from "../middleware/Validation.js";

const loginrouter = express.Router();
// dưới đây là các route về việc đăng nhập, đăng xuất

// đăng nhập
loginrouter.post('/login',checkLogin,Login);

// thông tin người dùng
loginrouter.get('/profile',authorizationUser, profile);

// đăng xuất
loginrouter.delete('/logout',logOut);
export default loginrouter;