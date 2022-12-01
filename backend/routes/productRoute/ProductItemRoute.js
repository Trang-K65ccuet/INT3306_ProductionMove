import express from 'express';
import { getProductItem,getProductitemByCssx, addProductItemList, sendListProductItem } from '../../controllers/product/ProductItemController.js';
import {checkCssx, authorizationUser } from '../../middleware/AuthUser.js';
const itemRouter = express.Router();

itemRouter.get('/productitems',authorizationUser, getProductItem);
itemRouter.get('/productitems/cssx/:cssx',authorizationUser, getProductitemByCssx);
itemRouter.post('/productitems/add',authorizationUser, checkCssx, addProductItemList);
itemRouter.post('/productitems/send',authorizationUser,checkCssx, sendListProductItem);
export default itemRouter;