import express from "express";
import { getUsers, getUserById, updateUser,deleteUser, postUser } from "../controllers/AdminController.js"; 
import {Login, profile, logOut} from '../controllers/AuthController.js';
import { getProductLine, addProductLine } from "../controllers/product/ProductLineController.js";
import { authorizationUser, checkAdmin } from "../middleware/AuthUser.js";
import { getProductItem, addProductItemList } from "../controllers/product/ProductItemController.js";
const router = express.Router();

router.get('/users',authorizationUser,checkAdmin, getUsers );
router.get('/users/:id', getUserById);
router.post('/users/create',authorizationUser,checkAdmin, postUser);
router.put('/users/update/:id',updateUser);
router.delete('/users/delete/:id',deleteUser);

router.get('/productitem', authorizationUser, getProductItem);
router.post('/productitem/add',authorizationUser, checkAdmin, addProductItemList);
export default router;