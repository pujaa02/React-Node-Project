import * as express from "express";
let route = express.Router();
import form from "../controller/form";
import userauthenticate from "../controller/userauthenticate";

route.use(form);
route.use(userauthenticate);


export default route;
