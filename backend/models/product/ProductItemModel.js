import { database } from "../../config/Database.js";
import { DataTypes } from "sequelize";
import { ProductLine } from "./ProductLineModel.js";
import User from '../user/UserModel.js';

export const ProductItem = database.define('productitems',{
    productcode: {
        type: DataTypes.STRING,
        allowNull:false,
        primaryKey: true
    },
    productline: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: ProductLine,
            key: 'productline'
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    manufactureId: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: User,
            key: 'id'
        }
    }

}, {
    timestamps: false
  });
    
    