import {ProductLine} from "../../models/productmodel/ProductLineModel.js";
export const getProductList = async (req, res) => {
    try {
        const productlist = await ProductList.findAll({
            attributes: ['id', 'name', 'description']
            
        })
        res.status(200).json(productlist);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const addProductList = async (req,res) => {
    const {name, description} = req.body;

    try {
        await ProductList.create({
            id: null,
            name: req.body.name,
            description: req.body.description
        })
        return res.status(200).json({msg: "Tạo danh mục thành công"})
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}
