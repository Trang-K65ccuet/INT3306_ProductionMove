import {ProductLine} from "../../models/product/ProductLineModel.js";
export const getProductLine = async (req, res) => {
    try {
        const productlist = await ProductLine.findAll({
            attributes: ['productline', 'description']
            
        })
        res.status(200).json(productlist);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const addProductLine = async (req,res) => {
    try {
        await ProductLine.create({
            productline: req.body.productline,
            description: req.body.description
        })
        return res.status(200).json({msg: "Tạo danh mục thành công"})
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}
