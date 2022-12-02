import { database } from "../../config/Database.js";
import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";

  export const ProductLine = database.define("productlines", {
    id: {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
       allowNull: true
    },

    productline: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
    
});
database.sync().then(() => {
    console.log('table created successfully!');
  }).catch((error) => {
    console.error('Unable to create table : ', error);
  });
