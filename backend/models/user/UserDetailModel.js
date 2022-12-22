import { DataTypes } from "sequelize";
import { database} from "../../config/Database.js";
import User from './UserModel.js';
const UserDetail = database.define("userdetail", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: User,
            key: 'id'
        }
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phonenumber: {
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    }
});
export default UserDetail;