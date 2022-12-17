import  express  from "express";
import { authorizationUser, checkAdmin, checkCssx} from "../../middleware/AuthUser.js";
import { getProductLine, addProductLine } from "../../controllers/product/ProductLineController.js";
const linerouter = express.Router();
linerouter.get('/productline', authorizationUser,getProductLine );
linerouter.post('/productline/add',authorizationUser,checkAdmin, addProductLine);
linerouter.delete('/productline/delete',authorizationUser, checkAdmin, )

export default linerouter;