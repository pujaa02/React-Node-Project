import * as express from "express";
let route = express.Router();
import ajaxform from "../controller/ajaxform";
import login from "../controller/login"
import register from "../controller/register";


// 
route.use(ajaxform);
route.use(login);
route.use(register);


export default route;
