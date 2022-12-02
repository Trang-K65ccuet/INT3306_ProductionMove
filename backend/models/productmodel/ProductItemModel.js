import { database } from "../../config/Database.js";
import { DataTypes } from "sequelize";
import { ProductLine } from "./ProductLineModel.js";

export const ProductItem = database.define('productitems', {
    
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productlineId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ProductLine,
            key: 'id'
        }
     },

    productcode: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    manufacture: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    ,
    // tình trạng ở đây sẽ là 1 số nguyên, với 0 là mới sản xuất, còn ở trong kho
    status: {
        type: DataTypes.INTEGER,
        allowNull: false
    }


});
ProductLine.hasMany(ProductItem);
database.sync().then(() => {
    console.log('table created successfully!');
  }).catch((error) => {
    console.error('Unable to create table : ', error);
  });
