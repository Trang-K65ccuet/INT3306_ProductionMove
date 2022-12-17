import { DataTypes } from "sequelize";
import { database} from "../../config/Database.js";

//lưu danh sách các người dùng bao gồm người quản lý, cơ sở sản xuất, đại lý phân phối
const User = database.define("users", {
    id : {
      type: DataTypes.INTEGER,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: true,
        
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false 
    },
   
    position :{
      type: DataTypes.STRING,
      allowNull: false
    },
    password :{
      type: DataTypes.STRING,
      allowNull: false
    }
 });
 database.sync().then(() => {
  console.log('table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});
 

 export default User;
 
 