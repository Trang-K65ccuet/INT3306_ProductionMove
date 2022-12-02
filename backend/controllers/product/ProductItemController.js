import { ProductItem } from "../../models/productmodel/ProductItemModel.js";
import { ProductDistribution } from "../../models/phanphoibaohanh/ProductDistributionModel.js";
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
}
export const addProductItemList = async(req, res) => {
    try {
        const {productline,productlineId,quantity,productimage} = req.body;
        let d = await ProductItem.findAndCountAll({
            where: {
                productlineId : productlineId
            }
        });
        let i =0 ;
        for(i; i< quantity; i++ ) {
            const a = d.count + i;
          await ProductItem.create({
            
            name: 'Máy tính ' + productline,
            image: productimage,
            productlineId: productlineId,
            productcode: productline + a,
            manufacture: req.userName,
            status: '0',
          })
        }
        return res.status(200).json({msg: "Tạo lô hàng thành công"+ d.count});
    } catch (error) {
        return res.status(400).json({msg: error.message});
    }
}
export const sendListProductItem = async (req, res) => {
    try {
        
        const {productlineId, quantity, distributionAgent} = req.body;
        const existedProductInStock = await ProductItem.findAndCountAll({
            where: {
                productlineId: productlineId,
                status: 0
            }
            
        
        })
        if (quantity >  existedProductInStock.count) {
            return res.status(400).json({msg: "yêu cầu vượt quá số lượng trong kho"})
        };
        
        let i = 0;
        for (i; i < quantity; i++) {
            const item = existedProductInStock.rows.at(i);
           
            await ProductItem.update({
                status: 1
            }, {where: {
                productcode: item.productcode
            }});
            
            await ProductDistribution.create({
                productcode: item.productcode,
                name: item.name,
                image: item.image,
                distributionAgent: distributionAgent
               });
        }
        
        res.status(200).json({msg: "Gửi thành công " + quantity + " sản phẩm ở danh mục có id "+ productlineId})
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
    
}