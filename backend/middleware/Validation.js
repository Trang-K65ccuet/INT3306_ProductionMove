import expressValidator from 'express-validator';
import {body, validationResult} from 'express-validator';
import { check } from 'express-validator';

export const checkLogin = [check('username').notEmpty().withMessage("Yêu cầu nhập tài khoản"),
check('password').notEmpty().withMessage("Yêu cầu nhập mật khẩu")];

export const checkRegisterForm = [check('name').notEmpty().withMessage("Cần điền tên người dùng"),check('password')     
.isLength({ min: 5 }).withMessage('Mật khẩu phải có ít nhất 6 ký tự')
.matches(/\d/).withMessage('Mật khẩu phải có 1 ký tự in hoa'), check('username').notEmpty().withMessage("Cần điền tên tài khoản"), check('confpassword').equals(body.password).withMessage("Confpass khác password"),
check('status').notEmpty().withMessage("Chưa có trạng thái hoạt động"), check('position').notEmpty().withMessage("Chưa có vị trí")];

const checkUpdateUser = [check('name').notEmpty().withMessage("Cần có tên người dùng")]
