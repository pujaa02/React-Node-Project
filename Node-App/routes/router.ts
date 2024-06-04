import * as express from "express";
const route = express.Router();
import form from "../controller/form";
import userauthenticate from "../controller/userauthenticate";
import fetchuser from "../controller/fetchuser";
import updateform from "../controller/updateform";
import bookhome from "../controller/bookhome";

route.post("/register", userauthenticate.register);
route.get("/activatecheck/:user_id", userauthenticate.activatecheck);
route.get("/deleteuser/:id", userauthenticate.deleteuser);
route.post("/password/:user_id", userauthenticate.password);
route.get("/checkuser/:email/:pass", userauthenticate.checkuser);
route.get("/finduser/:email", userauthenticate.finduser);

route.post("/submit", form.submit);
route.get("/getallemp", fetchuser.getallemp);

route.get("/findemp/:id", updateform.findemp);
route.post("/updateemp/:id", updateform.updateemp);
route.get("/deleteemp/:id", updateform.deletemp);

route.get("/getdata/:user_id", bookhome.getdata);


export default route;
