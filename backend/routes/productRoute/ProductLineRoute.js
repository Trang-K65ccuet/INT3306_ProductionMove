import  express  from "express";
import { authorizationUser, checkAdmin} from "../../middleware/AuthUser.js";
import { getProductLine, addProductLine,updateProductLine, deleteProductLine } from "../../controllers/product/ProductLineController.js";
const linerouter = express.Router();
linerouter.get('/productline', authorizationUser,getProductLine );
linerouter.post('/productline/add',authorizationUser,checkAdmin, addProductLine);
linerouter.delete('/productline/delete',authorizationUser, checkAdmin,deleteProductLine );
linerouter.put('/productline/update', authorizationUser, checkAdmin, updateProductLine);

export default linerouter;