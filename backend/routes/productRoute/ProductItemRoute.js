import { getProductItem, productStatistic, spdaban, AllFaultItem} from "../../controllers/product/ProductItemController.js";
import { authorizationUser,checkAdmin,checkCssx } from "../../middleware/AuthUser.js";
import express from 'express';
const itemRoute = express.Router();
// lấy tất cả các sản phẩm đã được sản xuất
itemRoute.get('/productitem/all', authorizationUser,checkAdmin,getProductItem);
// thống kê các sản phẩm đã sản xuất(tổng cộng và theo dòng sp) theo năm
itemRoute.get('/productitem/statistic', authorizationUser,checkAdmin,productStatistic);
//thống kê các sản phẩm đã bán ( số lượng - theo tổng và theo dòng)
itemRoute.get('/productitem/byproductline', authorizationUser,checkAdmin,spdaban);
// thống kê các sản phẩm bị lỗi
itemRoute.get('/productitem/fault', authorizationUser, checkAdmin,AllFaultItem );

//đây là các thống kê cho cơ sở sx

export default itemRoute;