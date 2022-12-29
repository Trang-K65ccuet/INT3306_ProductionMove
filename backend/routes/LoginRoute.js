import express from "express";
import { profile, Login, logOut } from "../controllers/authentication/AuthController.js";
import { authorizationUser } from "../middleware/AuthUser.js";
import { body, validationResult, check} from 'express-validator';
import { checkLogin, checkRegisterForm} from "../middleware/Validation.js";

const loginrouter = express.Router();
loginrouter.post('/login',checkLogin,Login);
loginrouter.get('/profile',authorizationUser, profile);
loginrouter.delete('/logout',logOut);
export default loginrouter;