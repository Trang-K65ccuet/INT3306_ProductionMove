import { allItemWarranty, sendfixedItem, setCannotFIxItem } from "../controllers/warranty/WarrantyController.js";
import { authorizationUser, checkWarranty } from "../middleware/AuthUser.js";
import express from 'express';

const warrantyRouter = express.Router();

// tất cả các sản phẩm đã từng hoặc đang được trung tâm bảo hành
warrantyRouter.get('/warranty/allitem',authorizationUser, checkWarranty, allItemWarranty);

//gửi trả sản phẩm bảo hành xong về cho đại lý phân phối
warrantyRouter.post('/warranty/sendfixeditem', authorizationUser, checkWarranty, sendfixedItem);


export default warrantyRouter;