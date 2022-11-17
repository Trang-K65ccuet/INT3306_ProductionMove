import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {getUsers, getUserById} from './controllers/UserController.js';
import router from './routes/UserRoute.js';
dotenv.config();

const app = express();


app.use(cors());

app.use(express.json());

app.use(router);

app.listen(3000);


