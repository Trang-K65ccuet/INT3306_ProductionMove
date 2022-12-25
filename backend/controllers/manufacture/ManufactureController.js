import ConsignmentRequest from "../../models/consignment/ConsignmentRequestModel.js";
import { Consignment } from "../../models/consignment/ConsignmentModel.js";
import { ProductItem } from "../../models/product/ProductItemModel.js";
import User from "../../models/user/UserModel.js";
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

export const getAllRequestByManufacture = async (req, res) => {
   try {
    const allrequest = await ConsignmentRequest.findAll({
        where: {
            manufactureid : req.Id
        }
    })
    return res.status(200).json(allrequest);
   } catch (error) {
    return res.status(400).json({msg: error})
   } 
}
//
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