import { database } from "../../config/Database.js";
import { DataTypes, INTEGER } from "sequelize";
import { ProductLine } from "../product/ProductLineModel.js";
import User from "../user/UserModel.js";

const ConsignmentRequest = database.define('consignmentrequests', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    productline: {
        type: DataTypes.STRING,
        references: {
            model: ProductLine,
            key: 'productline'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    consignmentid: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    manufactureid : {
        type: DataTypes.INTEGER,
        references : {
            model: User,
            key: 'id'
        }
    },
    status: {
        type: INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});
export default ConsignmentRequest;