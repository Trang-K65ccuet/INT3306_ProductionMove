import express from "express";
import { getAllRequestByManufacture, getManufactures , getProductitemByManufacture, sendListProductItem } from "../controllers/manufacture/ManufactureController.js";
import { authorizationUser, checkCssx } from "../middleware/AuthUser.js";
// route cho cơ sở sản xuất
const manufactureRouter = express.Router();

manufactureRouter.get('/manufactures/all', authorizationUser, getManufactures);
manufactureRouter.get('/manufactures/items',authorizationUser, getProductitemByManufacture);
manufactureRouter.get('/manufactures/requests', authorizationUser, getAllRequestByManufacture);
manufactureRouter.post('/productitem/send',authorizationUser, checkCssx, sendListProductItem );


export default manufactureRouter;
