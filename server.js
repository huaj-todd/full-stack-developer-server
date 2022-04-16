import express from 'express';
import cors from 'cors';
import helloController  from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from 'mongoose';
const CONNECTION_STRING =process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/webdev' ||"mongodb+srv://todd:<1234567890>@cluster0.im488.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const DB_CONNECTION_STRING = "mongodb+srv://todd:<1234567890>@cluster0.im488.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" ||'mongodb://localhost:27017/webdev'
mongoose.connect(DB_CONNECTION_STRING);
const app = express();
app.use(cors());
app.use(express.json());
helloController(app);
userController(app);
tuitsController(app);
//app.get('/hello', (req, res) => {res.send('Life is good!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT ||4000);