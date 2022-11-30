import { ProductItem } from "../../models/productmodel/ProductItemModel.js";

export const getProductItem = async (req, res) => {
    try {
        const productitem = await ProductItem.findAll({
        
        });
        return res.status(200).json({productitem});
    } catch (error) {
        return res.status(500).json({msg : "Không ok"})
    }
   
};
