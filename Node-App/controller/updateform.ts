import * as express from "express";
const route = express.Router();
import { Request, Response } from "express";
import Employee from "./form.controller";
import { FormData } from "../interfacefile";
import { EmployeeAttribute } from "./form.controller";

// route.get(
//     "/finduser/:id",
const findemp = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const query: EmployeeAttribute | null = await Employee.findOne({ where: { emp_id: id } })
    res.json({ result: query });
}

// route.post(
//     "/updateemp/:id",
const updateemp = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const data: FormData = req.body.formData;

    try {
        await Employee.update({ fname: data.fname, lname: data.lname, designation: data.designation, email: data.email, phone: data.phone, gender: data.gender, rel_status: data.rel_status, address1: data.address1, address2: data.address2, city: data.city, state: data.state, zipcode: data.zipcode, bd: data.bd }, { where: { emp_id: id } });
        res.json({ msg: "success" })

    } catch (error) {
        res.json({ msg: "failed" })
    }

}

// route.get(
//     "/deleteemp/:id",
const deletemp = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
        await Employee.destroy({ where: { emp_id: id } });
        res.json({ msg: "success" });
    } catch (error) {
        res.json({ msg: "failed" });
    }
};

export default { findemp, updateemp, deletemp };
