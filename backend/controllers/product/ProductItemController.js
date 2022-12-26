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


