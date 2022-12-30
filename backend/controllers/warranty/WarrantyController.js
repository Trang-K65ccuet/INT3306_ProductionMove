import { QueryTypes } from "sequelize";
import { database } from "../../config/Database.js";
import { ProductItem } from "../../models/product/ProductItemModel.js";
import User from "../../models/user/UserModel.js";
import Warranty from "../../models/warranty/WarrantyModel.js";
//tất cả các trung tâm bảo hành
export const allWarrantyAgents = async (req, res) => {
    try {
        const all = await User.findAll({
            where: {
                position: 'ttbh'
            }
        })
        return res.status(200).json(all);
    } catch (error) {
        return res.status(400).json({msg: error});
    }
}
// lấy ra tất cả các sản phẩm đang bảo hành theo từng trung tâm bảo hành
export const allItemWarranty = async (req, res) => {
    try {
    const sql = "SELECT warranties.productcode, productitems.productline, productitems.name, productitems.status, users.name FROM warranties "
     +"INNER JOIN productitems ON productitems.productcode = warranties.productcode INNER JOIN users ON users.id = :wr_id WHERE productitems.status = 4 AND warranties.warrantyAgentId = :wr_id";
    
    const allitem = await database.query(sql, {replacements: {
        wr_id: req.Id
    }, type: QueryTypes.SELECT})
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
// các sản phẩm đã sửa xong
export const allFixedWarranty = async (req, res) => {   
    try {
        const sql = "SELECT * FROM warranties LEFT JOIN productitems ON warranties.productcode = productitems.productcode WHERE productitems.status = 5 AND warranties.warrantyAgentId = :wr_id";
        const all = await database.query(sql, {replacements: {
            wr_id: req.Id
        }, type: QueryTypes.SELECT});
        return res.status(200).json(all);
    } catch (error) {
        return res.status(400).json({msg: error});
    }
    
}
// sản phẩm không thể sửa, cần trả lại nhà máy
export const setCannotFIxItem = async (req, res) => {
    const {productcode} = req.body;
    try {
        const sql = "SELECT * FROM productitems INNER JOIN warranties ON productitems.productcode = warranties.productcode WHERE "
    + "productitems.productcode = :product_code AND warrantyAgentId = :id_warranty AND status = 4";
    const item = await database.query(sql, {replacements: {
    product_code: productcode, 
    id_warranty: req.Id
    }});
    if (item.length == 0) return res.status(400).json({msg: "Không tồn tại sản phẩm có code này trong kho bảo hành"});
    await ProductItem.update({status: 7}, {
    where: {
        productcode: productcode
    }
})
   res.status(200).json({msg: "Chuyển sản phẩm về trạng thái không thể sửa chữa thành công"});     
    } catch (error) {
   res.status(400).json({msg: error});
    }

}
// tất cả các sản phẩm không thể bảo hành
export const allCantFixItemsByWarrantyAgent = async (req, res) => {
    try {
        const sql = "SELECT warranties.productcode, productitems.productline, productitems.manufactureid, users.name FROM warranties LEFT JOIN productitems ON productitems.productcode = warranties.productcode"
        + " LEFT JOIN users ON users.id = productitems.manufactureid WHERE productitems.status = 7 AND warrantyAgentId = :wr_id";
        const all = await database.query(sql, {replacements: {
            wr_id: req.Id

        }, type: QueryTypes.SELECT})
        return res.status(200).json(all);
    } catch (error) {
        return res.status(400).json({msg: error})
    }
}

// chuyển sản phẩm về nhà máy sản xuất
export const sendCannotFixItem = async (req, res) => {
    const {productcode} = req.body;
    try {
        const sql = "SELECT * FROM warranties LEFT JOIN productitems ON warranties.productcode = productitems.productcode WHERE status = 7 AND "
        +"warranties.productcode = :pr_code AND warranties.warrantyAgentId = :w_i";
        const it = await database.query(sql, {replacements: {
            pr_code: productcode, w_i: req.Id
        }, type: QueryTypes.SELECT})
        if (it.length == 0) return res.status(400).json({msg: "Không tồn tại sản phẩm có code này trong ds phải chuyển về cssx"});
        else {
            await ProductItem.update({status: 8}, {where: {
                productcode: productcode,
                status: 7
            }})
        }
        return res.status(200).json({msg: "Đã chuyển sản phẩm về cơ sở sản xuất thành công"});
    } catch (error) {
        return res.status(400).json({msg: error})
    }
}
