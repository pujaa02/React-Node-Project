import * as express from "express";
let route = express.Router();
import form from "../controller/form";
import userauthenticate from "../controller/userauthenticate";
import fetchuser from "../controller/fetchuser";
import updateform from "../controller/updateform"

route.use(form);
route.use(userauthenticate);
route.use(fetchuser);
route.use(updateform);


export default route;
