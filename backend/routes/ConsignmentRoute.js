import express from "express";
import { authorizationUser } from "../middleware/AuthUser.js";
import {getProductLotByDistributor, getProductItemByDistributor, sendProductToCustomer} from '../controllers/consignment/ConsignmentController.js';

const consignmentRouter = express.Router();
consignmentRouter.get('/lot/:id', getProductLotByDistributor);
consignmentRouter.get('/lot/get/item',authorizationUser,getProductItemByDistributor);
consignmentRouter.post('/consignment/send', authorizationUser, sendProductToCustomer);
export default consignmentRouter;