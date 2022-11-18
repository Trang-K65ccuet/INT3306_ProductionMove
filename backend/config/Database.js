import { Sequelize } from "sequelize";
export const database = new Sequelize(
    'userdb',
    'root',
    'Manh2812002',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
   );
 
 database.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });