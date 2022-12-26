import { getProductItem, productStatistic,getProductItemByLine} from "../../controllers/product/ProductItemController.js";
import { authorizationUser,checkAdmin,checkCssx } from "../../middleware/AuthUser.js";
import express from 'express';
const itemRoute = express.Router();
// lấy tất cả các sản phẩm đã được sản xuất
itemRoute.get('/productitem/all', authorizationUser,checkAdmin,getProductItem);
itemRoute.get('/productitem/statistic', authorizationUser,checkAdmin,productStatistic);
itemRoute.post('/productitem/byproductline', authorizationUser,checkAdmin,getProductItemByLine);


export default itemRoute;