import { database } from "../../config/Database.js";
import { DataTypes } from "sequelize";
import { ProductLine } from "./ProductLineModel.js";

 export const ProductItem = database.define('productitems', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productline: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productcode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    manufacture: {
        type: DataTypes.STRING,
        allowNull: false
    },
    distributionAgent: {
        type: DataTypes.STRING,
        allowNull: true
    },
    warrantyAgent: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    warrantyTime: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    activeWarranty: {
        type: DataTypes.DATE,
        allowNull: true
    }, 
    note: {
        type: DataTypes.STRING,
        allowNull: true
    }


});
database.sync().then(() => {
    console.log('table created successfully!');
  }).catch((error) => {
    console.error('Unable to create table : ', error);
  });
