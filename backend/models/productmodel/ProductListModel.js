import { database } from "../../config/Database.js";
import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";

const ProductList = database.define("productlists", {
    id: {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        validate:{
          notEmpty: true           
        }
    },

    name: {
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
export default ProductList;