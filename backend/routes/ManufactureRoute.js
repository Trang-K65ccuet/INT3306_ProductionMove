import express from "express";
import { getAllRequestByManufacture, getManufactures , getProductitemByManufacture} from "../controllers/manufacture/ManufactureController.js";
import { authorizationUser } from "../middleware/AuthUser.js";
const manufactureRouter = express.Router();

manufactureRouter.get('/manufactures/all', authorizationUser, getManufactures);
manufactureRouter.get('/manufactures/items',authorizationUser, getProductitemByManufacture);
manufactureRouter.get('/manufactures/requests', authorizationUser, getAllRequestByManufacture);

export default manufactureRouter;
