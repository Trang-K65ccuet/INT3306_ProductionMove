import express from "express";
import { authorizationUser, checkConsignment } from "../middleware/AuthUser.js";
import {getProductLotByDistributor, getProductItemByDistributor, sendProductToCustomer, getFaultItemFromCus, getItemNeedWarrantyByConsignment
, sendFaultItemToWarrantyAgent, allFixedItem, sendItemBack} from '../controllers/consignment/ConsignmentController.js';

const consignmentRouter = express.Router();

consignmentRouter.get('/lot/:id',authorizationUser, getProductLotByDistributor);
// lấy ra tất cả các sản phẩm ở đại lý phân phối
consignmentRouter.get('/lot/get/item',authorizationUser,getProductItemByDistributor);
// đại lý phân phối gửi sản phẩm cho khách hàng
consignmentRouter.post('/consignment/send', authorizationUser, sendProductToCustomer);
// đại lý phân phối nhập lại các sản phẩm đã bán bị lỗi
consignmentRouter.post('/productitem/importfaultproduct', authorizationUser, checkConsignment,getFaultItemFromCus);
// tất cả sản phẩm lỗi đã chuyển về kho của đại lý phân phối
consignmentRouter.get('/productitem/faultiteminstock', authorizationUser,checkConsignment, getItemNeedWarrantyByConsignment);
// gửi sản phẩm cần bảo hành đến trung tâm bảo hành
consignmentRouter.post('/productitem/senditemtowarranty',authorizationUser, checkConsignment, sendFaultItemToWarrantyAgent);
// tất cả các sản phẩm đã bảo hành xong, chờ được gửi lại cho khách hàng
consignmentRouter.get('/productitem/allfixeditem', authorizationUser,checkConsignment,allFixedItem);
// gửi sản phẩm bảo hành xong về cho khách hàng
consignmentRouter.post('/producitem/sendbackitem', authorizationUser, checkConsignment,sendItemBack);
export default consignmentRouter;