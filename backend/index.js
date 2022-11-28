import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import SequelizeStore from "connect-session-sequelize";
import { database } from "./config/Database.js";
import {getUsers, getUserById} from './controllers/AdminController.js';
import router from './routes/UserRoute.js';
import loginrouter from "./routes/LoginRoute.js";
import session from 'express-session';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

dotenv.config();
const app = express();

app.use(cookieParser());
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    next();
  });
app.use(express.json());
app.use(router);
app.use(loginrouter);
app.listen(5000);


