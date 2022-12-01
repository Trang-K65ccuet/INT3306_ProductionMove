import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { database } from "./config/Database.js";
import router from './routes/AdminRoute.js';
import loginrouter from "./routes/LoginRoute.js";
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import itemRouter from './routes/productRoute/ProductItemRoute.js';

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
// route cho việc đăng nhập
app.use(loginrouter);
//route của admin
app.use(router);
// route của product
app.use(itemRouter);
app.listen(5000);


