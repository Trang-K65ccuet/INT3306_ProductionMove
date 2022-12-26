import ConsignmentRequest from "../../models/consignment/ConsignmentRequestModel.js";
import { Consignment } from "../../models/consignment/ConsignmentModel.js";
import { ConsignmentDetail } from "../../models/consignment/ConsignmentDetailModel.js";
import { ProductItem } from "../../models/product/ProductItemModel.js";
import User from "../../models/user/UserModel.js";
import { database } from "../../config/Database.js";
import { QueryTypes } from "sequelize";
// lấy ra tất cả các cssx
export const getManufactures = async (req, res) => {
try {
    const manu = await User.findAll({
    where: {
        position: 'cssx'
    }
    })
    return res.status(200).json(manu)
} catch (error) {
    return res.status(400).json({msg: error})
}
};
// tạo các sản phẩm mới
export const addProductItemList = async(req, res) => {
    try {
        const records = req.body.length;
        var j = 0;
        for (j; j< records; j++) {
        const {productline,quantity,image, price, dateOfManufacture} = req.body.at(j);
        let d = await ProductItem.findAndCountAll({
            where: {
                productline : productline
            }
        });
        let i =0 ;
        for(i; i< quantity; i++ ) {
            const a = d.count + i;
          await ProductItem.create({
            productcode: productline + a,
            productline: productline,
            name: 'Máy tính ' + productline,
            image: image,
            price: price,
            status: '0',
            manufactureId: req.Id,
            dateOfManufacture: dateOfManufacture
          })
        }
    }
        return res.status(200).json({msg: "Tạo thành công: " +records});
    } catch (error) {
        return res.status(400).json({msg: error.message});
    }
}

// lấy ra tất cả các sản phẩm do user(cssx) sản xuất
export const getProductitemByManufacture = async (req, res) => {
    try {
        const productItemByCssx = await ProductItem.findAll({
            where: {
                manufactureid: req.Id
            }
        })
        return res.status(200).json(productItemByCssx);
        
    } catch (error) {
        return res.status(500).json({msg : error.message});
    }
};

// lấy ra tất cả các yêu cầu nhập hàng
export const getAllRequestByManufacture = async (req, res) => {
   try {
    const sql = "SELECT productline, quantity,consignmentid, users.name, consignmentrequests.status FROM consignmentrequests LEFT JOIN users ON users.id = consignmentrequests.consignmentid WHERE consignmentrequests.manufactureid = :manu_id";
    const allrequest = await database.query(sql, {replacements: {
        manu_id: req.Id
    }, type: QueryTypes.SELECT})
    return res.status(200).json(allrequest);
   } catch (error) {
    return res.status(400).json({msg: error})
   } 
}
// gửi lô hàng
export const sendListProductItem = async (req, res) => {
    try {
        
        const {quantity, productline, distributorid, exportday} = req.body;
        const existedProductInStock = await ProductItem.findAndCountAll({
            where: {
                productline: productline,
                status: 0
            }
        
        
        });
        const lo = await Consignment.findAndCountAll();
        var lots = lo.count;

        if (quantity >  existedProductInStock.count) {
            return res.status(400).json({msg: "yêu cầu vượt quá số lượng trong kho"})
        };
        await Consignment.create({
            lot: lots + 1,
            quantity: quantity,
            distributorid: distributorid,
            manufactureid: req.Id,
        })
        let i = 0;
        for (i; i < quantity; i++) {
            const item = existedProductInStock.rows.at(i);
           
            await ProductItem.update({
                status: 1
            }, {where: {
                productcode: item.productcode
            }});
            
            await ConsignmentDetail.create({
                productcode: item.productcode,
                lot: lots + 1,
                exportday: exportday
               });
        }
        
        res.status(200).json({msg: "Gửi thành công " + quantity + " sản phẩm ở danh mục có lô hàng "+ (lots + 1)})
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
    
}
// lấy ra tất cả các lô hàng của cơ sở sản xuất đã chuyển đi
export const allLotsHaveSent = async (req, res) => {
    const sql = "SELECT lot, quantity, users.name FROM consignments LEFT JOIN users ON users.id = consignments.distributorid WHERE consignments.manufactureid = :mn_id";
   try {
    const all = await database.query(sql, {replacements: {
        mn_id: req.Id
    }, type: QueryTypes.SELECT})
    return res.status(200).json(all);
   } catch (error) {
    return res.status(400).json({msg: error});
   }
}
// chi tiết lô hàng
export const lotDetail = async (req, res) => {
    const {lot} = req.body;
    try {
      const sql = "SELECT * FROM productitems LEFT JOIN consignmentdetails ON productitems.productcode = consignmentdetails.productcode WHERE lot = :l_ot";
      const detail = database.query(sql, {replacements: {
        l_ot: lot
      }, type: QueryTypes.SELECT});
      return res.status(200).json(detail);
    } catch (error) {
      return res.status(400).json({msg: error});
    }
}
// tất cả các sản phẩm không thể sửa trả về cssx
export const getAllCantFixItem = async (req, res) => {
    try {
        const all = await ProductItem.findAll({where: {
            status: 8, 
            manufactureid: req.Id
        }})
        return res.status(200).json(all);
    } catch (error) {
        return res.status(400).json({msg: error});
    }
    
}