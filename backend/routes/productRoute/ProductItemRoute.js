import { getProductItem, productStatistic, spdaban, AllFaultItem, productStatisticManufacture, spdabanManufacture, ssa} from "../../controllers/product/ProductItemController.js";
import { authorizationUser,checkAdmin,checkCssx } from "../../middleware/AuthUser.js";
import express from 'express';
const itemRoute = express.Router();
// lấy tất cả các sản phẩm đã được sản xuất
itemRoute.get('/productitem/all', authorizationUser,checkAdmin,getProductItem);
// thống kê của admin
// thống kê các sản phẩm đã sản xuất(tổng cộng và theo dòng sp) theo năm
itemRoute.get('/productitem/statistic', authorizationUser,checkAdmin,productStatistic);
itemRoute.get('/thunghiem', authorizationUser, checkAdmin, ssa);
//thống kê các sản phẩm đã bán ( số lượng - theo tổng và theo dòng)
itemRoute.get('/productitem/byproductline', authorizationUser,checkAdmin,spdaban);
// thống kê các sản phẩm bị lỗi
itemRoute.get('/productitem/fault', authorizationUser, checkAdmin,AllFaultItem );

//thống kê cơ sở sản xuất

itemRoute.get('/productitem/statisticmanufacture', authorizationUser, checkCssx, productStatisticManufacture);

//thống kê sản phẩm đã bán
itemRoute.get('/productitem/selledmanufacture', authorizationUser, checkCssx, spdabanManufacture);

// thống kê số sản phẩm bị lỗi, theo tổng cộng và chi tiết

itemRoute.get('/productitem/statisticmanufacture', authorizationUser, checkCssx, productStatisticManufacture);

//thống kê sản phẩm đã bán
itemRoute.get('/productitem/selledmanufacture', authorizationUser, checkCssx, spdabanManufacture);

export default itemRoute;
