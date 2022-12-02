import {ProductLine} from "../../models/productmodel/ProductLineModel.js";
export const getProductLine = async (req, res) => {
    try {
        const productlist = await ProductList.findAll({
            attributes: ['id', 'productline', 'description']
            
        })
        res.status(200).json(productlist);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const addProductLine = async (req,res) => {
    const {productline, description} = req.body;

    try {
        await ProductList.create({
            id: null,
            productline: req.body.productline,
            description: req.body.description
        })
        return res.status(200).json({msg: "Tạo danh mục thành công"})
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}
