import { ProductItem } from "../../models/product/ProductItemModel.js";
import {ProductLine} from "../../models/product/ProductLineModel.js";
import { database } from "../../config/Database.js";
import { QueryTypes } from "sequelize";
// lấy ra tất cả các danh mục sản phẩm
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
// cập nhật danh mục sản phẩm
export const updateProductLine = async (req, res) => {
    const {productline, newproductline, description} = req.body;
    
    try {
        if (productline != newproductline) {
        await ProductLine.create({
            productline: newproductline,
            description: description
        });
    
        await ProductItem.update({
            productline: newproductline
        }, {
        where: {
            productline: productline
        }
        });
        
        await ProductLine.destroy({
            where: {
                productline: productline
            }
        });
    } else {
        await ProductLine.update({description: description}, {where: {
            productline: productline
        }});
    }
        return res.status(200).json({msg: "Cập nhật danh mục sản phẩm thành công"});
    } catch (error) {
        return res.status(400).json({msg: error});
    }
}
// xóa danh mục sản phẩm khi không có sp nào
export const deleteProductLine = async (req, res) => {
    //const {productline} = req.body.productline;
    const a = req.body.productline;
    var x = " '" + a + "' "
       try {
         const sql = "DELETE FROM productlines WHERE productlines.productline = :productline ";
         await database.query(sql, {replacements: {productline: x}, type: QueryTypes.DELETE});
        return res.status(200).json({msg: "Xóa danh mục sản phẩm thành công"});
    } catch (error) {
        return res.status(400).json({msg: error});
    }
}