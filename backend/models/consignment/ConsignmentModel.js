import { DataTypes } from "sequelize";
import { database} from "../../config/Database.js";
import User from "../user/UserModel.js";

export const Consignment = database.define('consignment', {
    lot: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    distributorid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }

    },
    manufactureid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }

}, {
    timestamps: false
  });