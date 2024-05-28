import * as express from "express";
let route = express.Router();
import form from "../controller/form";
import login from "../controller/login"
import register from "../controller/register";


// 
route.use(form);
route.use(login);
route.use(register);


export default route;
