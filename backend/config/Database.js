import { Sequelize } from "sequelize";
export const sequelize = new Sequelize(
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