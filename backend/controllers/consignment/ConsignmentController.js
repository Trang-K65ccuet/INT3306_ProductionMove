import { Consignment } from "../../models/consignment/ConsignmentModel.js";
import { ConsignmentDetail } from "../../models/consignment/ConsignmentDetailModel.js";
import { ProductItem } from "../../models/product/ProductItemModel.js";
import { database } from "../../config/Database.js";
import {QueryTypes} from 'sequelize';
import CustomerDetail from '../../models/transaction/CustomerDetailModel.js';
import Transaction from '../../models/transaction/TransactionModel.js';
import { response } from "express";
import ConsignmentRequest from "../../models/consignment/ConsignmentRequestModel.js";
// dưới đây là những chức năng mà đại lý phân phối có quyên thực hiện
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
   const {productline, quantity, customername, customerphone, customeraddress, date} = req.body;
   const distributorid = req.Id;

   try {
    const findexist = await CustomerDetail.findOne({
        where: {
            customerPhoneNumber: customerphone
        }
    });
    if(findexist.length == 0) {
    const customer = await CustomerDetail.create({
        customerName: customername,
        customerPhoneNumber: customerphone,
        customerAddress: customeraddress
    });
    findexist = customer;
}
    const quer = "SELECT * FROM consignmentdetails Left Join consignments ON consignmentdetails.lot " 
    + "= consignments.lot left join productitems ON consignmentdetails.productcode = productitems.productcode WHERE status = 1 AND productline = :product_line";
    const getItemAvailable = await database.query(quer, {
                    replacements: {product_line: productline},
               type: QueryTypes.SELECT}); 
               var i = 0;
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
                                    dateOfTransaction: date
                                })
                            } catch (error) {
                                return res.status(400).json({msg: error + getItemAvailable.length })
                            }
                            
                          }  

    res.status(200).json({msg: "Gửi sản phẩm thành công cho khách hàng " + findexist.customerName});

  } catch (error) {
     res.status(400).json(error);

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
    try {
        await ProductItem.update({
            status: 3
        }, {
            where: {
                productcode: productcode
            }
        })
       return res.status(200).json({msg: "Lấy sản phẩm cần bảo hành thành côn, có code là" + productcode}) 
    } catch (error) {
        
    }
}
