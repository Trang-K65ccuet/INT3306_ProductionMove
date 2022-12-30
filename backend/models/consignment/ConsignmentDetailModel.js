import { DataTypes } from "sequelize";
import { database} from "../../config/Database.js";
import { ProductItem } from "../product/ProductItemModel.js";
import { Consignment } from "./ConsignmentModel.js";

// đây là model cho chi tiết của lô hàng đã xuất 
export const ConsignmentDetail = database.define('consignmentdetail',{
  productcode: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey:true,
    references: {
        model: ProductItem,
        key: 'productcode'
    }
  },
  lot: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Consignment,
        key: 'lot'
    }
  },
  exportday: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  timestamps: false
});
