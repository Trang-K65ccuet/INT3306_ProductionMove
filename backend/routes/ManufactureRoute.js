import express from "express";
import { getAllRequestByManufacture, getManufactures , getProductitemByManufacture, sendListProductItem, allLotsHaveSent, lotDetail } from "../controllers/manufacture/ManufactureController.js";
import { authorizationUser, checkCssx } from "../middleware/AuthUser.js";
// route cho cơ sở sản xuất
const manufactureRouter = express.Router();

manufactureRouter.get('/manufactures/all', authorizationUser, getManufactures);
manufactureRouter.get('/manufactures/items',authorizationUser, getProductitemByManufacture);
manufactureRouter.get('/manufactures/requests', authorizationUser,checkCssx, getAllRequestByManufacture);
manufactureRouter.post('/productitem/send',authorizationUser, checkCssx, sendListProductItem );
// tất cả các lô đã xuất cho đại lý phân phối
manufactureRouter.get('/manufacture/lot', authorizationUser, checkCssx, allLotsHaveSent);

// chi tiết của lô hàng
manufactureRouter.post('/manufacture/lotdetail', authorizationUser, checkCssx, lotDetail);

export default manufactureRouter;
