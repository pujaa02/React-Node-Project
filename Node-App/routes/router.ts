import * as express from "express";
let route = express.Router();
import ajaxform from "../controller/ajaxform";

// import login from "../controller/login";


// 
route.use(ajaxform);

// route.use(login);


export default route;
