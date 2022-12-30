import { database } from "../../config/Database.js";
import { DataTypes } from "sequelize";

// model cho thông tin người dùng
const CustomerDetail = database.define('customerdetail', {
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    customerName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customerPhoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customerAddress: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false
});
database.sync().then(() => {
    console.log('table created successfully!');
  }).catch((error) => {
    console.error('Unable to create table : ', error);
  });
   
export default CustomerDetail;