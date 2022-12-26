import { Consignment } from "../../models/consignment/ConsignmentModel.js";
import { ConsignmentDetail } from "../../models/consignment/ConsignmentDetailModel.js";
import { ProductItem } from "../../models/product/ProductItemModel.js";
import { database } from "../../config/Database.js";
import {DataTypes, QueryTypes} from 'sequelize';
import CustomerDetail from '../../models/transaction/CustomerDetailModel.js';
import Transaction from '../../models/transaction/TransactionModel.js';
import Warranty from "../../models/warranty/WarrantyModel.js";
import { response } from "express";
import ConsignmentRequest from "../../models/consignment/ConsignmentRequestModel.js";
import User from "../../models/user/UserModel.js";

// dưới đây là những chức năng mà đại lý phân phối có quyên thực hiện
export const getProductLotByDistributor = async (req, res) => {
    const distributorId = req.Id;
    try {
        const sql = "SELECT lot, quantity, users.name FROM consignments LEFT JOIN users ON consignments.manufactureid = users.id WHERE consignments.distributorid = :dis_id";

        const getall = await database.query(sql, {replacements: {
            dis_id: distributorId
        }, type: QueryTypes.SELECT});
        res.status(200).json(getall)
    } catch (error) {
        res.status(400).json({msg: "Xảy ra lỗi không lấy được số lô sản xuất"})
    }
    
}
export const getProductItemByDistributor = async (req, res) => {
    const distributorid = req.Id;
    try {
        const getallLot = await Consignment.findAll({
            where: {
                distributorid : distributorid
            }
        });
        var i = 0;
        var allItem = [];
        for(i; i< getallLot.length; i++) {
            let Lot = getallLot.at(i).lot;
            let sql = "SELECT productitems.productcode, productline, name, image, price, status, manufactureid, status, lot FROM `productitems` LEFT JOIN `consignmentdetails` ON `productitems`.`productcode` = `consignmentdetails`.`productcode` WHERE lot = ?";
            
            const getItemByLot = await database.query(sql, {
                replacements: [Lot],
                type: QueryTypes.SELECT}); 
        var j = 0;
        for (j; j< getItemByLot.length; j++) {
            allItem.push(getItemByLot.at(j))
        }
            
        }
       
        
        res.status(200).json(allItem);
    } catch (error) {
        res.status(400).json({msg: "Có lỗi là " + error})
    }
    
    
}
// gửi hàng tới người nhận là khách hàng
export const sendProductToCustomer = async(req, res) => {
   const {productline, quantity, customername, customerphone, customeraddress, date, timeExpired} = req.body;
   const distributorid = req.Id;
   try {
    const findexist = await CustomerDetail.findAndCountAll({
        where: {
                    customerPhoneNumber: customerphone
               }
    })
    if(findexist.count == 0) {
        await CustomerDetail.create({
            customerName: customername,
            customerPhoneNumber: customerphone,
            customerAddress: customeraddress
        })
    }
    const quer = "SELECT * FROM consignmentdetails  INNER JOIN consignments ON consignmentdetails.lot " 
    + "= consignments.lot INNER JOIN productitems ON consignmentdetails.productcode = productitems.productcode WHERE status = 1 AND productline = :product_line";
    const getItemAvailable = await database.query(quer, {
                     replacements: {product_line: productline},
                     type: QueryTypes.SELECT}); 
    var i = 0;
    if(quantity > getItemAvailable.length) return res.status(400).json({msg: "Vượt quá số lượng trong kho, yêu cầu: "+ quantity + " ,trong kho: "+ getItemAvailable.length});
    else{
        for(i; i< quantity; i++) {
                    try {
                            ProductItem.update({
                                     status: 2
                                            }, {
                                      where: {
                                       productcode: getItemAvailable.at(i).productcode  
                                     }
                                     })
                                           
                                     await Transaction.create({
                                    productcode: getItemAvailable.at(i).productcode,
                                    customerId: findexist.customerId,
                                    dateOfTransaction: date,
                                    expiredDay: timeExpired
                                            })
                                        } catch (error) {
                                            return res.status(400).json({msg: error + getItemAvailable.length })
                                        }
                                        
                                      }  
            
    }
    res.status(200).json({msg: "Gửi sp thành công"})
} catch (error) {
    return res.status(400).json({msg: error})
   }   

}
// tất cả các sản phẩm đã bán, mọi tình trạng
export const allItemSelled = async (req, res) => {
    const sql = "SELECT DISTINCT * FROM productitems LEFT JOIN transactions ON productitems.productcode = transactions.productcode "
    + "LEFT JOIN consignmentdetails ON consignmentdetails.productcode = transactions.productcode LEFT JOIN consignments ON consignments.lot = consignmentdetails.lot "
    + "WHERE consignments.distributorid = :dis_id";
    try {
        const allSellItem = await database.query(sql, {replacements: {
            dis_id: req.Id
        }, type: QueryTypes.SELECT});
        return res.status(200).json(allSellItem);
    } catch (error) {
        return res.status(400).json({msg: error});
    }
}
// gửi yêu cầu nhập hàng tới cơ sở sản xuất
export const sendRequest = async (req, res) => {
    const {productline, quantity, manufactureid} = req.body;
    try {
        await ConsignmentRequest.create({
            productline: productline,
            quantity: quantity,
            distributorid: req.Id,
            manufactureid: manufactureid
        })
        return res.status(200).json({msg: "Gửi yêu cầu nhập hàng thành công đến cơ sở sx "})
    } catch (error) {
        return res.status(200).json({msg: error})
    }
} 

// chuyển sản phẩm cần bảo hành về kho
export const getFaultItemFromCus = async (req, res) => {
    const {productcode} = req.body;
    const find = await ProductItem.findAndCountAll({
        where: {
            productcode: productcode,
            status: 2
        }
    })
    if (find.count == 0) return res.status(400).json({msg: "Không có sản phẩm này ở khách hàng"})
    try {
        await ProductItem.update({
            status: 3
        }, {
            where: {
                productcode: productcode
            }
        })
       return res.status(200).json({msg: "Lấy sản phẩm cần bảo hành thành công, có code là" + productcode}) 
    } catch (error) {
       return res.status(400).json({msg: error})
    }
}
export const getItemNeedWarrantyByConsignment = async (req, res) => {
    const sql = "SELECT productitems.productcode, productline, consignments. lot, image, status FROM productitems INNER JOIN consignmentdetails ON productitems.productcode = consignmentdetails.productcode " 
    + "INNER JOIN consignments ON consignments.lot = consignmentdetails.lot WHERE status = 3 AND distributorid = :manu_id";
    try {
        const allit = await database.query(sql,{
            replacements: {manu_id: req.Id},
        type: QueryTypes.SELECT});
        return res.status(200).json(allit);
    } catch (error) {
        return res.status(400).json({msg: error});
    }
   
// gửi sản phẩm lỗi cần bh từ đại lý pp đến trung tâm bh
}
export const sendFaultItemToWarrantyAgent = async (req, res) => {
    const {productcode, warrantyAgentId, dateOfGuarantee} = req.body;
    const findAgent = await User.findAndCountAll({where:{
        id: warrantyAgentId,
        position: 'ttbh'
    }});
    if (findAgent.count == 0) return res.status(400).json({msg: "Không tồn tại ttbh này"});
    const it = await ProductItem.findAndCountAll({
        where: {
            productcode: productcode,
            status : 3
        }
    })
    if (it.count == 0) {
        return res.status(400).json({msg: "không tồn tại sp trong danh sách cần bảo hành"});
    }
    try {
       await Warranty.create({
        productcode: productcode,
        warrantyAgentId: warrantyAgentId,
        dateOfGuarantee: dateOfGuarantee
       })
       await ProductItem.update({status: 4}, {
        where: {
           productcode: productcode 
        }
       })
       return res.status(200).json({msg: "Gửi sản phẩm đến đại lý bảo hành thành công, sp có code là "+ productcode})
    } catch (error) {
       return res.status(400).json({msg: error})
    }
}
//Lấy ra tất cả các sản phẩm đã bảo hành xong
export const allFixedItem = async (req, res) => {
    try {
       const sql = "SELECT productitems.productcode, productline, consignmentdetails.lot, status FROM productitems INNER JOIN "
       + "consignmentdetails ON consignmentdetails.productcode = productitems.productcode INNER JOIN consignments ON consignmentdetails.lot = "
       + "consignments.lot WHERE status = 5 AND consignments.distributorid = :distr_butor";
       const allfixed = await database.query(sql, {replacements: {
        distr_butor : req.Id
       },   type: QueryTypes.SELECT});
       return res.status(200).json(allfixed);
    } catch (error) {
       return res.status(400).json({msg: error})
    }
}
// Trả lại khách hàng
export const sendItemBack = async (req, res) => {
    const {productcode} = req.body;
    try {
        const item = await ProductItem.findAndCountAll({
            where: {
                productcode: productcode,
                status: 5
            }
        })
        if(item.count == 0) {
            return res.status(400).json({msg: "Không có sp này trong danh sách bảo hành thành công"});
        }
        await ProductItem.update({status: 6}, {
            where: {
                productcode: productcode,
                status: 5
            }
        })
        return res.status(200).json({msg: "Gửi trả lại sản phẩm cho khách hàng thành công"});
    } catch (error) {
           return res.status(400).json({msg: error});  
    }
}
