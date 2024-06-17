import * as express from "express";
const route = express.Router();
import userauthenticate from "../controller/userauthenticate";
import Ajaxform from "../controller/ajaxform";
import fetchempdata from "../controller/fetchempdata";
import fetchstatedata from "../controller/fetchstatedata";

route.post("/register", userauthenticate.register);
route.get("/activatecheck/:user_id", userauthenticate.activatecheck);
route.get("/deleteuser/:id", userauthenticate.deleteuser);
route.post("/password/:user_id", userauthenticate.password);
route.get("/checkuser/:email/:pass", userauthenticate.checkuser);
route.get("/finduser/:email", userauthenticate.finduser);

//insert form
route.post("/insertform", Ajaxform.insertform);
route.post("/updateform/:id", Ajaxform.updateform);

//fetchallempdata

route.get("/employees", fetchempdata.get_user);
route.get("/fetchempdata/:id", fetchempdata.emp_det);
route.get("/deleteemp/:id", fetchempdata.delete_user)

//fetchstatedata

route.get("/state", fetchstatedata.get_state);
route.get("/cities/:id", fetchstatedata.get_cities);
route.get("/city", fetchstatedata.get_city);


export default route;
