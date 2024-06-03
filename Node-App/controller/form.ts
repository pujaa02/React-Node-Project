import * as express from "express";
const route = express.Router();
import { Request, Response } from "express";
import checkAuth from "../middleware/checkauth";
import parser from "body-parser";
route.use(parser.json());
route.use(parser.urlencoded({ extended: false }));
import Employee from "./form.controller";
import { FormData } from "../interfacefile";


// route.post(
//   "/submit",

const submit = async (req: Request, res: Response) => {
  const data: FormData = req.body.formData;
  try {
    await Employee.create({ fname: data.fname, lname: data.lname, designation: data.designation, email: data.email, phone: data.phone, gender: data.gender, rel_status: data.rel_status, address1: data.address1, address2: data.address2, city: data.city, state: data.state, zipcode: data.zipcode, bd: data.bd });
    res.json({ msg: "success" });
  } catch (error) {
    res.json({ msg: "failed" });
  }

}

export default { submit }
