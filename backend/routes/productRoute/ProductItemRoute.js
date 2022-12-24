import { getProductItem, addProductItemList} from "../../controllers/product/ProductItemController.js";
import { authorizationUser,checkAdmin,checkCssx } from "../../middleware/AuthUser.js";
import express from 'express';
const itemRoute = express.Router();
// lấy tất cả các sản phẩm đã được sản xuất
itemRoute.get('/productitem/all', authorizationUser,checkAdmin,getProductItem);
// cssx thêm sản phẩm đã được sản xuất vào kho
itemRoute.post('/productitem/add',authorizationUser,checkCssx,addProductItemList);
export default itemRoute;