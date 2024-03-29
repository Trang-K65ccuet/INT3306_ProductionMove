import express from "express";
import { authorizationUser, checkConsignment } from "../middleware/AuthUser.js";
import {getAllDistributor,getProductLotByDistributor, getProductItemByDistributor, sendProductToCustomer, 
    getFaultItemFromCus, getItemNeedWarrantyByConsignment
, sendFaultItemToWarrantyAgent, allFixedItem, sendItemBack, allItemSelled, retrieveItem,
 GetRetrieveItem, allItemNeedSend, chuyenspManufacture, allItemInCustomer} from '../controllers/consignment/ConsignmentController.js';

const consignmentRouter = express.Router();
//danh sách khách hàng

// tất cả các đại lý
consignmentRouter.get('/distributor', authorizationUser, getAllDistributor);
// lấy ra tất cả lô hàng của người dùng
consignmentRouter.get('/lots',authorizationUser,checkConsignment,getProductLotByDistributor);

// lấy ra tất cả các sản phẩm ở đại lý phân phối
consignmentRouter.get('/lot/get/item',authorizationUser,checkConsignment,getProductItemByDistributor);

// đại lý phân phối gửi sản phẩm cho khách hàng
consignmentRouter.post('/consignment/send', authorizationUser,checkConsignment, sendProductToCustomer);

//tất cả các sản phẩm đã bán của đại lý phân phối
consignmentRouter.get('/consignment/sell',authorizationUser,checkConsignment,allItemSelled);

// tất cả các sản phẩm đang ở khách hàng, nếu muốn nhập về thì lấy từ đây
consignmentRouter.get('/consignment/productatcustomer', authorizationUser, checkConsignment, allItemInCustomer);
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

// yêu cầu triệu hồi sản phẩm
consignmentRouter.post('/productitem/retrieveitem',authorizationUser, checkConsignment, retrieveItem);

//tất cả các sản phẩm cần triệu hồi
consignmentRouter.get('/productitem/allretrieveitem',authorizationUser, checkConsignment, GetRetrieveItem);

// các sản phẩm cần trả về cssx do lâu ko bán đc
consignmentRouter.get('/productitem/cantsell', authorizationUser,checkConsignment,allItemNeedSend);
// chuyển sản phẩm về cssx
consignmentRouter.post('/producitem/sendbackovertime', authorizationUser, checkConsignment, chuyenspManufacture);
export default consignmentRouter;