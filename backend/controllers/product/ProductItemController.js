import { ProductItem } from "../../models/product/ProductItemModel.js";
import {Consignment} from "../../models/consignment/ConsignmentModel.js";
import { ConsignmentDetail } from "../../models/consignment/ConsignmentDetailModel.js";
export const getProductItem = async (req, res) => {
    try {
        const productItem = await ProductItem.findAll({
        
        });
        return res.status(200).json({productItem});
    } catch (error) {
        return res.status(500).json({msg : "Không ok"})
    }
   
};

// lấy các sản phẩm theo dòng sản phẩm

