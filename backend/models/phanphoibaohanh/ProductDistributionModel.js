import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
import { database} from "../../config/Database.js";
import {ProductItem} from '../productmodel/ProductItemModel.js';
export const ProductDistribution = database.define('productdistribution', {
  
   productcode: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
     },
     name: {
        type: DataTypes.STRING,
        allowNull: false
     },
     image: {
        type: DataTypes.STRING,
        allowNull: false
     },
     distributionAgent: {
        type: DataTypes.STRING,
        allowNull: false
     },
    }
);
