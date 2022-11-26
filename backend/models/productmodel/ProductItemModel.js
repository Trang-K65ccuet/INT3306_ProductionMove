import { database } from "../../config/Database.js";
import { DataTypes } from "sequelize";

export const ProductItem = database.define('productitem', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    productline: {
        type: 
    }
})