import { Consignment } from "../../models/consignment/ConsignmentModel.js";
import { ConsignmentDetail } from "../../models/consignment/ConsignmentDetailModel.js";
import { ProductItem } from "../../models/product/ProductItemModel.js";
import { database } from "../../config/Database.js";
import {QueryTypes} from 'sequelize';
export const getProductLotByDistributor = async (req, res) => {
    const distributorId = req.params.id;
    try {
        const getall = await Consignment.findAll({
            where: {
                distributorid: distributorId
            }
        });
        res.status(200).json({getall})
    } catch (error) {
        res.status(400).json({msg: "Xảy ra lỗi không lấy được số lô sản xuất"})
    }
    
}
export const getProductItemByDistributor = async (req, res) => {
    const distributorid = req.params.id;
    try {
        const getallLot = await Consignment.findAll({
            where: {
                distributorid: distributorid
            }
        })
        var i = 0;
        var allItem = [];
        for(i; i< getallLot.length; i++) {
            let Lot = getallLot.at(i).lot;
            let sql = "SELECT productitems.productcode, productline, name, image, price, status, manufactureid, status, lot FROM `productitems` LEFT JOIN `consignmentdetails` ON `productitems`.`productcode` = `consignmentdetails`.`productcode` WHERE lot = ?";
            
            const getItemByLot = await database.query(sql, {
                replacements: [Lot],
                type: QueryTypes.SELECT}); 
           
            allItem = getItemByLot;
        }
       
        
        res.status(200).json(allItem);
    } catch (error) {
        res.status(400).json({msg: "Có lỗi là " + error})
    }
    
    
}
const sendProductToCus = async(req, res) => {

}