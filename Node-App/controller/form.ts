import * as express from "express";
const route = express.Router();
import { Request, Response } from "express";
import checkAuth from "../middleware/checkauth";
import parser from "body-parser";
route.use(parser.json());
route.use(parser.urlencoded({ extended: false }));
import Employee from "./form.controller";
import { FormData } from "../interfacefile";


route.post(
  "/submit",

  async (req: Request, res: Response) => {
    const data: FormData = req.body.formData;
    const {
      fname,
      lname,
      designation,
      email,
      phone,
      gender,
      rel_status,
      address1,
      address2,
      city,
      state,
      zipcode,
      bd,
    } = data;

    const datainserted = await Employee.create({ fname: fname, lname: lname, designation: designation, email: email, phone: phone, gender: gender, rel_status: rel_status, address1: address1, address2: address2, city: city, state: state, zipcode: zipcode, bd: bd });
    const emp_id: number = (datainserted?.dataValues.emp_id);

    res.json({ msg: "success" });
  }
);

export default route;
