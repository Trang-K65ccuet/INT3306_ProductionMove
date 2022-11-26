import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import SequelizeStore from "connect-session-sequelize";
import { database } from "./config/Database.js";
import {getUsers, getUserById} from './controllers/UserController.js';
import router from './routes/UserRoute.js';
import loginrouter from "./routes/LoginRoute.js";
import session from 'express-session';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

dotenv.config();
const app = express();

app.use(cookieParser());

app.use(cors());

app.use(express.json());
/*app.use(session({
    secret: 'app',
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));*/
app.use(router);
app.use(loginrouter);
app.listen(5000);


