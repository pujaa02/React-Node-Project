import * as express from "express";
let route = express.Router();
import { Request, Response } from "express";
import Employee from "./form.controller";
import { FormData } from "../interfacefile";

route.get(
    "/finduser/:id",
    async (req: Request, res: Response) => {
        const id: string = req.params.id;
        const query = await Employee.findOne({ where: { emp_id: id } })
        res.json({ result: query });
    }
);

route.post(
    "/updateemp/:id",
    async (req: Request, res: Response) => {
        const id: string = req.params.id;
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

        try {
            const updatedata = await Employee.update({ fname: fname, lname: lname, designation: designation, email: email, phone: phone, gender: gender, rel_status: rel_status, address1: address1, address2: address2, city: city, state: state, zipcode: zipcode, bd: bd }, { where: { emp_id: id } });
            res.json({ msg: "success" })

        } catch (error) {
            res.json({ msg: "failed" })
        }

    }
);

route.get(
    "/deleteemp/:id",
    async (req: Request, res: Response) => {
        const id: string = req.params.id;
        try {
            const result = await Employee.destroy({ where: { emp_id: id } });
            res.json({ msg: "success" });
        } catch (error) {
            res.json({ msg: "failed" });
        }
    }
);

export default route;
