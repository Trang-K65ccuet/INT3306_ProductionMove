import { ProductItem } from "../../models/product/ProductItemModel.js";
import {Consignment} from "../../models/consignment/ConsignmentModel.js";
import { ConsignmentDetail } from "../../models/consignment/ConsignmentDetailModel.js";
import { database } from "../../config/Database.js";
import { QueryTypes } from "sequelize";
export const getProductItem = async (req, res) => {
    try {
        const productItem = await ProductItem.findAll({
        
        });
        return res.status(200).json({productItem});
    } catch (error) {
        return res.status(500).json({msg : "Không ok"})
    }
   
};
// thống kê số sản phẩm đã tạo theo từng dòng sản phẩm
export const productStatistic = async (req, res) => {
    try {
        const sql1 = "SELECT COUNT(*) as total, productline FROM productitems GROUP BY productline";
        const x1 = await database.query(sql1,{type: QueryTypes.SELECT});
        return res.status(200).json(x1);
    } catch (error) {
        return res.status(400).json({msg: error});
    }

}
// lấy các sản phẩm theo dòng sản phẩm
export const getProductItemByLine = async (req, res) => {
    const {productline} = req.body;
    try {
        const sql2 = "SELECT * FROM productitems WHERE productline = :prd";
        const x1 = await database.query(sql1,{replacements: {
            prd: productline
        }, type: QueryTypes.SELECT});
        return res.status(200).json(x1);
    } catch (error) {
        return res.status(400).json({msg: error});
    }
    }



