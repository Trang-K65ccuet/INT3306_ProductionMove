import { ProductItem } from "../../models/product/ProductItemModel";

// lấy ra tất cả các sản phẩm của cơ sở đã sản xuất
const getProductItemByManufacture = async (req, res) => {
    const manufactureid = req.Id;
   
    try {
        const allitem = await ProductItem.findAll({
            where: {
                manufactureid: manufactureid,
                
            }
        })
        return res.status(200).json({allitem});
    }
     catch (error) {
        return res.status(400).json({error});
    }
};

const getProductItemInStock = async (req, res) => {
    const manufactureid = req.Id;
    try {
        const iteminstock = await ProductItem.findAll({
            where: {
                manufactureid: manufactureid,
                status: 0
            }
        })
        res.status(200).json({iteminstock});
    } catch (error) {
        res.status(400).json({msg: error});
    }



}