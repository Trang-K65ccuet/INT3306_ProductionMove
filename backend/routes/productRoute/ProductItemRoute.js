import { getProductItem, addProductItemList, sendListProductItem } from "../../controllers/product/ProductItemController.js";
import { authorizationUser,checkAdmin,checkCssx } from "../../middleware/AuthUser.js";
import express from 'express';
const itemRoute = express.Router();

itemRoute.post('/productitem/add',authorizationUser,checkCssx,addProductItemList);
itemRoute.post('/productitem/send',authorizationUser, checkCssx, sendListProductItem )
export default itemRoute;
