import express from "express";
import { getAllRequestByManufacture, getManufactures , getProductitemByManufacture, sendListProductItem, allLotsHaveSent,
     lotDetail, addProductItemList, getAllCantFixItem} from "../controllers/manufacture/ManufactureController.js";
import { authorizationUser, checkCssx } from "../middleware/AuthUser.js";
// route cho cơ sở sản xuất
const manufactureRouter = express.Router();

// tất cả các cơ sở sản xuất
manufactureRouter.get('/manufactures/all', authorizationUser, getManufactures);

//tạo danh sách các sản phẩm mới
manufactureRouter.post('/productitem/add',authorizationUser,checkCssx,addProductItemList);
// các sản phẩm do user đã tạo
manufactureRouter.get('/manufactures/items',authorizationUser, getProductitemByManufacture);

// các yêu cầu xuất hàng từ đại lý phân phối
manufactureRouter.get('/manufactures/requests', authorizationUser,checkCssx, getAllRequestByManufacture);

// gửi danh sách các sản phẩm đến đại lý phân phối
manufactureRouter.post('/productitem/send',authorizationUser, checkCssx, sendListProductItem );

// tất cả các lô đã xuất cho đại lý phân phối
manufactureRouter.get('/manufacture/lot', authorizationUser, checkCssx, allLotsHaveSent);

// chi tiết của lô hàng
manufactureRouter.post('/manufacture/lotdetail', authorizationUser, checkCssx, lotDetail);

// tất cả các sản phẩm lỗi không thể sửa
manufactureRouter.get('/manufacture/allcantfix',authorizationUser, checkCssx, getAllCantFixItem);
export default manufactureRouter;
