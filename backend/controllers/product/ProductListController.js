import {ProductList} from '../../models/productmodel/ProductListModel.js'
const getProductList = async (req, res) => {
    try {
        const productlist = await ProductList.findAll({
            attributes: ['id', 'name', 'description']
            
        })
        res.status(200).json(productlist);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}