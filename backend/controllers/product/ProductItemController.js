import { ProductItem } from "../../models/product/ProductItemModel.js";
import {Consignment} from "../../models/consignment/ConsignmentModel.js";
import { ConsignmentDetail } from "../../models/consignment/ConsignmentDetailModel.js";
import { database } from "../../config/Database.js";
import { QueryTypes } from "sequelize";
export const getProductItem = async (req, res) => {
    try {
        const productItem = await ProductItem.findAll({
        
        });
        return res.status(200).json(productItem);
    } catch (error) {
        return res.status(500).json({msg : "Không ok"})
    }
   
};
// admin
// thống kê số sản phẩm đã tạo theo từng dòng sản phẩm
export const productStatistic = async (req, res) => {
    try {
        const sql1 = "SELECT COUNT(*) as totalquantity , MONTH(productitems.dateOfManufacture) as month, YEAR(productitems.dateOfManufacture) as year FROM productitems GROUP BY year, month";
        const sql2 = "SELECT COUNT(*) as total, productline FROM productitems GROUP BY productline";
        const x1 = await database.query(sql1,{type: QueryTypes.SELECT});
        const x2 = await database.query(sql2,{type: QueryTypes.SELECT});
        return res.status(200).json([x1, x2]);
    } catch (error) {
        return res.status(400).json({msg: error});
    }

}
export const ssa = async (req, res) => {
   try {
    const sql2 = "SELECT COUNT(*) as total, productline FROM productitems GROUP BY productline";
    const x2 = await database.query(sql2,{type: QueryTypes.SELECT});
    return res.status(200).json(x2);
   } catch (error) {
    
   }
}

// thống kê số sản phẩm đã bán
export const spdaban = async (req, res) => {
    try {
        const sql1 = "SELECT COUNT(*) as totalquantity, SUM(productitems.price) as totalmoney FROM transactions LEFT JOIN productitems ON productitems.productcode = transactions.productcode";
        const sql2 = "SELECT COUNT(*) as total, productline, SUM(productitems.price) FROM transactions LEFT JOIN productitems ON transactions.productcode = productitems.productcode GROUP BY productline";
        const x1 = await database.query(sql1,{type: QueryTypes.SELECT});
        const x2 = await database.query(sql2,{type: QueryTypes.SELECT});
        return res.status(200).json([x1, x2]);
    } catch (error) {
        return res.status(400).json({msg: error});
    }
}
// thống kê sản phẩm bị lỗi
export const AllFaultItem = async(req, res) => {
    try {
        const sql1 = "SELECT COUNT(*) as total, productitems.productline FROM productitems WHERE status >2 AND status < 10";
        const sql2 = "SELECT COUNT(*) as detailproductline, productitems.productline FROM productitems WHERE productitems.status >2 AND productitems.status < 10 GROUP BY productline";
        const totals = await database.query(sql1, {type: QueryTypes.SELECT});
        const detail = await database.query(sql2, {type: QueryTypes.SELECT});
        return res.status(200).json([totals, detail]);
    } catch (error) {
        return res.status(400).json({msg: error});
    }
}
// cssx
// thống kê sản phẩm đã tạo
export const productStatisticManufacture = async (req, res) => {
    try {
        const sql1 = "SELECT COUNT(*) as totalquantity , MONTH(productitems.dateOfManufacture) as month, YEAR(productitems.dateOfManufacture) as year FROM productitems WHERE manufactureid = :manu_id GROUP BY year, month";
        const sql2 = "SELECT COUNT(*) as total, productline FROM productitems WHERE manufactureid = :manu_id GROUP BY productline";
        const x1 = await database.query(sql1,{replacements: {
            manu_id: req.Id
        },type: QueryTypes.SELECT});
        const x2 = await database.query(sql2,{replacements: {
            manu_id: req.Id
        },type: QueryTypes.SELECT});
        return res.status(200).json([x1, x2]);
    } catch (error) {
        return res.status(400).json({msg: error});
    }

}
export const spdabanManufacture = async (req, res) => {
    try {
        const sql1 = "SELECT COUNT(*) as totalquantity, SUM(productitems.price) as totalmoney FROM transactions LEFT JOIN productitems ON productitems.productcode = transactions.productcode"
        + " WHERE productitems.manufactureid = :manu_id";
        const sql2 = "SELECT COUNT(*) as total, productline, SUM(productitems.price) as totalmoney FROM transactions LEFT JOIN productitems ON transactions.productcode = productitems.productcode WHERE productitems.manufactureid = :manu_id GROUP BY productline";
        const x1 = await database.query(sql1,{replacements: {
            manu_id: req.Id
        },type: QueryTypes.SELECT});
        const x2 = await database.query(sql2,{replacements: {
            manu_id: req.Id
        },type: QueryTypes.SELECT});
        return res.status(200).json([x1, x2]);
    } catch (error) {
        return res.status(400).json({msg: error});
    }
}
// sản phẩm đã từng hoặc đang bảo hành
export const itemNeedWarrantyManufacture = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}
// sản phẩm lỗi trả về nhà sản xuất