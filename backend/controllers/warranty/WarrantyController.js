import { ProductItem } from "../../models/product/ProductItemModel";
import Warranty from "../../models/warranty/WarrantyModel";

// lấy ra tất cả các sản phẩm cần bảo hành theo từng trung tâm bảo hành
export const AllItemWarranty = async (req, res) => {
    try {
    const allitem = await Warranty.findAll({
        where: {
            warrantyAgentId: req.Id
        }
    })
      return res.status(200).json(allitem);  
    } catch (error) {
      return res.status(400).json({msg: error});
    } 
}
// sửa sản phẩm thành công, gửi lại cho đại lý phân phối
export const sendfixedItem = async (req, res) => {
    const {productcode} = req.body;
    try {
    const item = await ProductItem.findAndCountAll({
        where: {
            status : 4,
            productcode: productcode
        }
    });
    if(item.count == 0) {
        return res.status(400).json({msg: "Không có sản phẩm này trong danh sách được bảo hành"})
    }
    await ProductItem.update({status: 5}, {
        where: {
            productcode: productcode
        }
    })
    return res.status(200).json({msg: "Sửa sản phẩm thành công, gửi về đại lý phân phối"})
    } catch (error) {
        res.status(400).json({msg: error});
    }
}
// gửi sản phẩm không thể sửa chữa về 

