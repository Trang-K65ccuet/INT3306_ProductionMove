import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import getUsers from './controllers/Users.js';
dotenv.config();

const app = express();
const router = express.Router();


app.use(cors());

app.use(express.json());

app.get('/ge',getUsers);
app.listen(3000);


