import  express  from "express";
import { authorizationUser, checkAdmin} from "../../middleware/AuthUser.js";
import { getProductLine, addProductLine,updateProductLine, deleteProductLine } from "../../controllers/product/ProductLineController.js";
const linerouter = express.Router();

// lấy ra tất cả danh mục sản phẩm
linerouter.get('/productline', authorizationUser,getProductLine );

//thêm danh mục sản phẩm
linerouter.post('/productline/add',authorizationUser,checkAdmin, addProductLine);

//xóa danh mục sản phẩm
linerouter.delete('/productline/delete',authorizationUser, checkAdmin,deleteProductLine );

// sửa danh mục sản phẩm
linerouter.put('/productline/update', authorizationUser, checkAdmin, updateProductLine);

export default linerouter;