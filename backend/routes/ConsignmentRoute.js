import express from "express";
import {getProductLotByDistributor, getProductItemByDistributor} from '../controllers/consignment/ConsignmentController.js';

const consignmentRouter = express.Router();
consignmentRouter.get('/lot/:id', getProductLotByDistributor);
consignmentRouter.get('/lot/item/:id',getProductItemByDistributor);
export default consignmentRouter;