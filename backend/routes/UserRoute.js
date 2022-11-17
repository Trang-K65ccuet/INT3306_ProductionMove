import express from "express";
const router = express.Router();
import { checkUser } from "../middleware/AuthUser.js";
import { getUsers, getUserById, updateUser,deleteUser } from "../controllers/UserController.js"; 

router.get('/users', getUsers );
router.get('/users/:id',checkUser, getUserById);
router.put('/users/update/:id',updateUser);
router.delete('/users/delete/:id',deleteUser)
export default router;