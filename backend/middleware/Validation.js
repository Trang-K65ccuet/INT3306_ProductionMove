import e from 'express';
import expressValidator from 'express-validator';
import {body, validationResult} from 'express-validator';
import { check } from 'express-validator';

export const checkLogin = [check('username').notEmpty().withMessage("Yêu cầu nhập tài khoản"),
check('password').notEmpty().withMessage("Yêu cầu nhập mật khẩu")];

// check bên admin 
export const checkRegisterForm = [check('name').notEmpty().withMessage("Cần điền tên người dùng"),check('password')     
.isLength({ min: 5 }).withMessage('Mật khẩu phải có ít nhất 6 ký tự')
.matches(/\d/).withMessage('Mật khẩu phải có 1 ký tự in hoa'), check('username').notEmpty().withMessage("Cần điền tên tài khoản"), check('confpassword').notEmpty().withMessage("Chưa điền confpass"),
check('status').notEmpty().withMessage("Chưa có trạng thái hoạt động"), check('position').notEmpty().withMessage("Chưa có vị trí")];

export const checkUpdateUser = [check('name').notEmpty().withMessage("Cần có tên người dùng"), check('position').notEmpty().withMessage("Cần có role cho người dùng"),
check('password')];

// check validate bên cơ sở sản xuất
export const checkAddItem = [check(body).isArray().withMessage("Chưa có các danh sách mặt hàng nhập"),
check('*.productline').notEmpty().withMessage("Thiếu dòng sản phẩm"), check('*.quantity').isEmpty().withMessage("Thiếu số lượng").isNumeric().withMessage("Không đúng định dạng số"),
 check('*.price').notEmpty().withMessage("Thiếu giá cho sản phẩm").isNumeric().withMessage('Không đúng định dạng số'),
check('*.dateOfManufacture').notEmpty().withMessage("Thiếu ngày nhập hàng")]
