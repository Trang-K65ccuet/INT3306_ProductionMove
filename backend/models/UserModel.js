import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
const sequelize = new Sequelize(
    'userdb',
    'root',
    'Manh2812002',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
   );
 
 sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

const User = sequelize.define("users", {
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
    }
 });

 export default User;
 
 