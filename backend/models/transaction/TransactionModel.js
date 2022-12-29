import { database } from "../../config/Database.js";
import { DataTypes } from "sequelize";
import {ConsignmentDetail} from '../consignment/ConsignmentDetailModel.js';
import CustomerDetail from "./CustomerDetailModel.js";

const Transaction = database.define('transaction', {
    transactionId : {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    productcode: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: ConsignmentDetail,
            key: 'productcode'
        }
    },
    customerId: {
        type: DataTypes.INTEGER,
        references: {
            model: CustomerDetail,
            key: 'customerId'
        }
    },
    dateOfTransaction: {
        type: DataTypes.DATE,
        allowNull: false
    },
    expiredDay: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

}, {
    timestamps: false
});
export default Transaction;