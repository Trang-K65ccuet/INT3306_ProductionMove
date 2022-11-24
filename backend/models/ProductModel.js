import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
import { database } from "../config/Database.js";

const Product = database.define('products', {
    id: {
        type: DataTypes.INTEGER

    }
})