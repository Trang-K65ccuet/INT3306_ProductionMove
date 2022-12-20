import {database} from "../../config/Database.js";
import { DataTypes } from "sequelize";
import Transaction from '../transaction/TransactionModel.js';
import User from "../user/UserModel.js";
const Warranty = database.define('warranty', {
    productcode: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Transaction,
            key: 'productcode'
        }
    },
    warrantyAgentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: "id"
        }
    },
    dateOfGuarantee: {
        type: DataTypes.DATE,
        allowNull: false
    }
});
export default Warranty;
