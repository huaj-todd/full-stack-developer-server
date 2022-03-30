import express from 'express';
import helloController  from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
const app = express();
helloController(app);
userController(app);
//app.get('/hello', (req, res) => {res.send('Life is good!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(4000);