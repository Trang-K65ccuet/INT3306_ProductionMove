import ConsignmentRequest from "../../models/consignment/ConsignmentRequestModel.js";
import { ProductItem } from "../../models/product/ProductItemModel.js";
import User from "../../models/user/UserModel.js";
// lấy ra tất cả các cssx
export const getManufactures = async (req, res) => {
try {
    const manu = await User.findAll({
    where: {
        position: 'cssx'
    }
    })
    return res.status(200).json(manu)
} catch (error) {
    return res.status(400).json({msg: error})
}
};
// lấy ra tất cả các sản phẩm do user(cssx) sản xuất
export const getProductitemByManufacture = async (req, res) => {
    try {
        const productItemByCssx = await ProductItem.findAll({
            where: {
                manufacture: req.params.cssx
            }
        })
        return res.status(200).json({productItemByCssx});
        
    } catch (error) {
        return res.status(500).json({msg : error.message});
    }
};

export const getAllRequestByManufacture = async (req, res) => {
   try {
    const allrequest = await ConsignmentRequest.findAll({
        where: {
            manufactureid : req.Id
        }
    })
    return res.status(200).json(allrequest);
   } catch (error) {
    return res.status(400).json({msg: error})
   } 
}