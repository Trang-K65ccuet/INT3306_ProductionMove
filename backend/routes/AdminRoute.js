import express from "express";
import { getUsers, getUserById, updateUser,deleteUser, postUser } from "../controllers/admin/AdminController.js"; 
import {Login, profile, logOut} from '../controllers/authentication/AuthController.js';
import { getProductLine, addProductLine } from "../controllers/product/ProductLineController.js";
import { authorizationUser, checkAdmin } from "../middleware/AuthUser.js";
import { body, validationResult, check} from 'express-validator';
import { checkRegisterForm, checkLogin} from "../middleware/Validation.js";
const router = express.Router();

// đây là các api cho admin

// tất cả các users
router.get('/users',authorizationUser,checkAdmin, getUsers );

// lấy user theo id
router.get('/users/:id', getUserById);

// tạo người dùng mới
router.post('/users/create',checkRegisterForm,authorizationUser,checkAdmin, postUser);

// chỉnh sửa thông tin người dùng
router.put('/users/update/:id',updateUser);

//xóa người dùng
router.delete('/users/delete/:id',deleteUser);

export default router;