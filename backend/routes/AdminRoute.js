import express from "express";
import { getUsers, getUserById, updateUser,deleteUser, postUser } from "../controllers/admin/AdminController.js"; 
import {Login, profile, logOut} from '../controllers/authentication/AuthController.js';
import { getProductLine, addProductLine } from "../controllers/product/ProductLineController.js";
import { authorizationUser, checkAdmin } from "../middleware/AuthUser.js";
const router = express.Router();

router.get('/users',authorizationUser,checkAdmin, getUsers );
router.get('/users/:id', getUserById);
router.post('/users/create',authorizationUser,checkAdmin, postUser);
router.put('/users/update/:id',updateUser);
router.delete('/users/delete/:id',deleteUser);
