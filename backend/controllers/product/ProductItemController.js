import { ProductItem } from "../../models/product/ProductItemModel.js";
import {Consignment} from "../../models/consignment/ConsignmentModel.js";
import { ConsignmentDetail } from "../../models/consignment/ConsignmentDetailModel.js";
export const getProductItem = async (req, res) => {
    try {
        const productItem = await ProductItem.findAll({
        
        });
        return res.status(200).json({productItem});
    } catch (error) {
        return res.status(500).json({msg : "Không ok"})
    }
   
};

export const getProductitemByCssx = async (req, res) => {
    try {
        const productItemByCssx = await ProductItem.findAll({
            where: {
                manufacture: req.params.cssx
            }
        })
        return res.status(200).json({productItemByCssx});
        
    } catch (error) {
        return res.status(500).json({msg : error.message});
    }
};

export const addProductItemList = async(req, res) => {
    try {
        const records = req.body.length;
        var j = 0;
        for (j; j< records; j++) {
        const {productline,quantity,image, price} = req.body.at(j);
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
          })
        }
    }
        return res.status(200).json({msg: "Tạo thành công: " +records});
    } catch (error) {
        return res.status(400).json({msg: error.message});
    }
}


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