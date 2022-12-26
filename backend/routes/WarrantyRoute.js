import { allItemWarranty, sendfixedItem, setCannotFIxItem, sendCannotFixItem} from "../controllers/warranty/WarrantyController.js";
import { authorizationUser, checkWarranty } from "../middleware/AuthUser.js";
import express from 'express';

const warrantyRouter = express.Router();

// tất cả các sản phẩm đã từng hoặc đang được trung tâm bảo hành
warrantyRouter.get('/warranty/allitem',authorizationUser, checkWarranty, allItemWarranty);

//gửi trả sản phẩm bảo hành xong về cho đại lý phân phối
warrantyRouter.post('/warranty/sendfixeditem', authorizationUser, checkWarranty, sendfixedItem);

//chuyển trạng thái sản phẩm thành lỗi không thể bảo hành
warrantyRouter.post('/warranty/cannotfix',authorizationUser,checkWarranty,setCannotFIxItem);

// gửi sản phẩm không thể sửa về cssx
warrantyRouter.post('/warranty/sendbackmanufacture',authorizationUser, checkWarranty, sendCannotFixItem);


export default warrantyRouter;