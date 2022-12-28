import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { database } from "./config/Database.js";
import router from './routes/AdminRoute.js';
import linerouter from "./routes/productRoute/ProductLineRoute.js";
import loginrouter from "./routes/LoginRoute.js";
import itemRoute from "./routes/productRoute/ProductItemRoute.js";
import consignmentRouter from "./routes/ConsignmentRoute.js";
import manufactureRouter from "./routes/ManufactureRoute.js";
import warrantyRouter from "./routes/WarrantyRoute.js";
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

dotenv.config();
const app = express();

app.use(cookieParser());
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Credentials', true);
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
//     next();
//   });
app.use(express.json());
// route cho việc đăng nhập
app.use(loginrouter);
//route của admin
app.use(router);
// route của productline
app.use(linerouter);
//route cho các sản phẩm
app.use(itemRoute);
//
app.use(consignmentRouter);
//
app.use(manufactureRouter);
//route cho trung tâm bảo hành
app.use(warrantyRouter);
app.listen(5000);


