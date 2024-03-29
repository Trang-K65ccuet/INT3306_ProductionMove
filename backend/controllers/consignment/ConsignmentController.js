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

// lấy ra các đại lý phân phối
export const getAllDistributor = async (req, res) => {
    try {
        const sql = "SELECT users.id, users.name FROM users WHERE users.position = 'dlpp' ";
        const all = await database.query(sql, {type: QueryTypes.SELECT});
        return res.status(200).json(all); 
    } catch (error) {
        return res.status(400).json({msg: error});
    }
}
// dưới đây là những chức năng mà đại lý phân phối có quyên thực hiện
// lấy tất cả các lô hàng
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
// lấy ra các sản phẩm theo đại lý phân phối
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
            let sql = "SELECT productitems.productcode, productline, productitems.name, image, price, productitems.manufactureid, productitems.status,users.name as distributorname, consignmentdetails.lot FROM `productitems` LEFT JOIN `consignmentdetails` ON `productitems`.`productcode` = `consignmentdetails`.`productcode` LEFT JOIN consignments ON consignments.lot = consignmentdetails.lot LEFT JOIN users ON users.id = consignments.distributorid WHERE consignmentdetails.lot = ?";
            
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
    const findex = await CustomerDetail.findOne({
        where: {
                    customerPhoneNumber: customerphone
               }
    })
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
                                    customerId: findex.customerId,
                                    dateOfTransaction: date ,
                                    expiredDay: timeExpired,
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
    + "LEFT JOIN consignmentdetails ON consignmentdetails.productcode = transactions.productcode LEFT JOIN consignments ON consignments.lot = consignmentdetails.lot LEFT JOIN customerdetails ON customerdetails.customerId = transactions.customerId"
    + " WHERE consignments.distributorid = :dis_id";
    try {
        const allSellItem = await database.query(sql, {replacements: {
            dis_id: req.Id
        }, type: QueryTypes.SELECT});
        return res.status(200).json(allSellItem);
    } catch (error) {
        return res.status(400).json({msg: error});
    }
}
// các sản phẩm đang ở khách hàng
export const allItemInCustomer = async (req, res) => {
    try {
        const sql = "SELECT * FROM transactions INNER JOIN productitems ON transactions.productcode = productitems.productcode INNER JOIN"
    + " consignmentdetails ON consignmentdetails. productcode = transactions.productcode INNER JOIN consignments ON consignments.lot = consignmentdetails.lot "
    + "WHERE productitems.status = 2 OR productitems.status = 6 AND consignments.distributorid = :distributorid";
    const all = await database.query(sql, {replacements: {distributorid: req.Id},type: QueryTypes.SELECT});
    return res.status(200).json(all);
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

//triệu hồi sản phẩm
export const retrieveItem = async (req, res) => {
    const {productline} = req.body;
    try {
        const sql = "UPDATE transactions LEFT JOIN productitems ON transactions.productcode = productitems.productcode" +
        " LEFT JOIN customerdetails ON customerdetails.customerId = transactions.customerId SET productitems.status = 9 WHERE"
        +" productline = :pro_ln AND status = 2 OR status = 6";
        await database.query(sql, {replacements: {
            pro_ln: productline
        }, type: QueryTypes.UPDATE})
        return res.status(200).json({msg: "đã triệu hồi sản phẩm thành công"});
    } catch (error) {
        return res.status(400).json({msg: error});
    }
   
}
// tất cả các sản phẩm cần triệu hồi
export const GetRetrieveItem = async (req,res) => {
    try {
        const sql = "SELECT productitems.productcode, productitems.productline, transactions.customerId, userdetails.phonenumber FROM productitems LEFT JOIN transactions ON transactions.productcode = productitems.productcode"
        + " LEFT JOIN consignmentdetails ON consignmentdetails.productcode = productitems.productcode LEFT JOIN consignments ON consignments.lot = consignmentdetails.lot" +
         " LEFT JOIN userdetails ON userdetails.id = transactions.customerId  WHERE consignments.distributorid = :dis_id AND productitems.status = 9";
        const retrieve = await database.query(sql, {replacements: {
            dis_id : req.Id
        }, type: QueryTypes.SELECT});
        return res.status(200).json(retrieve);
    } catch (error) {
        return res.status(400).json({msg: error});
}
}
// chuyển trạng thái sản phẩm về hết thời gian bảo hành
export const warrantyOverTime = async(req, res) => {
    try {
        const sql = "UPDATE productitems LEFT JOIN transactions ON productitems.productcode = transactions.productcode SET productitems.status = 10 WHERE DATEDIFF(CURDATE(), transactions."
        
    } catch (error) {
        
    }
} 
// các sản phẩm cần chuyển về do lâu không bán được
export const allItemNeedSend = async (req, res) => {
    try {
        const sql = "SELECT CURDATE() as currentdate, productitems.productcode, productitems.productline, productitems.manufactureId FROM productitems LEFT JOIN consignmentdetails ON productitems.productcode = consignmentdetails.productcode" 
        + " LEFT JOIN consignments ON consignments.lot = consignmentdetails.lot WHERE productitems.status = 1 AND consignments.distributorid = :dis_id AND DATEDIFF(CURDATE(), consignmentdetails.exportday) < 180";
        const retrieve = await database.query(sql, {replacements: {
            dis_id: req.Id
        }, type: QueryTypes.SELECT});
        return res.status(200).json(retrieve);
    } catch (error) {
        return res.status(400).json({msg: error});

    }
}
// chuyển sản phẩm về do lâu không bán được
export const chuyenspManufacture = async(req, res) => {
    const {productcode} = req.body;
    try {
        const sql = "UPDATE productitems LEFT JOIN consignmentdetails ON productitems.productcode = consignmentdetails.productcode" 
        + " LEFT JOIN consignments ON consignments.lot = consignmentdetails.lot SET productitems.status = 11 WHERE consignments.distributorid = :dis_id AND productitems.productcode = :pr_code";
        await database.query(sql, {replacements: {
           dis_id : req.Id,
           pr_code: productcode
        }, type: QueryTypes.UPDATE});
        return res.status(200).json({msg: "Chuyển sản phẩm thành công"})
    } catch (error) {
        return res.status(400).json({msg: error});
    }
}