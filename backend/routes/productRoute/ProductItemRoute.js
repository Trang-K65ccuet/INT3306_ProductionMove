import { getProductItem, productStatistic, spdaban, AllFaultItem, productStatisticManufacture, spdabanManufacture, ssa, 
    NumberitemNeedWarrantyManufacture, allitemSendToDistributor, statisticItemDistributor, DoanhthuStatisticDistributor, AllFaultWarranty} from "../../controllers/product/ProductItemController.js";
import { authorizationUser,checkAdmin,checkConsignment,checkCssx, checkWarranty } from "../../middleware/AuthUser.js";
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

//thống kê của cơ sở sản xuất

itemRoute.get('/productitem/statisticmanufacture', authorizationUser, checkCssx, productStatisticManufacture);
// sản phẩm cssx đã chuyển đi
itemRoute.get('/productitem/itemsendtodistributor',authorizationUser, checkCssx,allitemSendToDistributor);
//thống kê sản phẩm đã bán
itemRoute.get('/productitem/selledmanufacture', authorizationUser, checkCssx, spdabanManufacture);

// thống kê số sản phẩm cần bảo hành, theo tổng cộng và chi tiết
itemRoute.get('/productitem/totalfaultitem', authorizationUser, checkCssx, NumberitemNeedWarrantyManufacture);

// thống kê của đại lý pp
// sản phẩm đã nhập
itemRoute.get('/productitem/importdistributor', authorizationUser, checkConsignment, statisticItemDistributor);
// số sản phẩm đã bán, doanh thu, doanh thu theo dòng sản phẩm
itemRoute.get('/productitem/revenuedistributor',authorizationUser, checkConsignment, DoanhthuStatisticDistributor);

// số sp bị lỗi đã nhập
itemRoute.get('/productitem/importproductwarranty',authorizationUser, checkWarranty, AllFaultWarranty);
export default itemRoute;