import express from "express";
const router = express.Router();
//import { authorizationUser, checkAdmin} from "../middleware/AuthUser.js";
import { getUsers, getUserById, updateUser,deleteUser, postUser } from "../controllers/UserController.js"; 
import {Login, profile, logOut} from '../controllers/AuthController.js';
import { authorizationUser, checkAdmin } from "../middleware/AuthUser.js";
router.get('/users', getUsers );
router.get('/users/:id', getUserById);
router.post('/users/create',authorizationUser,checkAdmin, postUser);
router.put('/users/update/:id',updateUser);
router.delete('/users/delete/:id',deleteUser);
//router.post('/login',Login);

//router.get('/profile',profile);
//router.delete('/logout',logOut);
export default router;