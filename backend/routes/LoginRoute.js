import express from "express";
import { profile, Login, logOut } from "../controllers/authentication/AuthController.js";
import { authorizationUser } from "../middleware/AuthUser.js";
const loginrouter = express.Router();
loginrouter.post('/login', Login);
loginrouter.get('/profile',authorizationUser, profile);
loginrouter.get('/logout',logOut);
export default loginrouter;