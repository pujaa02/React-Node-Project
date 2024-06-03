import * as express from "express";
const route = express.Router();
import { Request, Response } from "express";
import Employee, { EmployeeAttribute } from "./form.controller";


// route.get(
//     "/getallemp",
const getallemp = async (req: Request, res: Response) => {
    const query: EmployeeAttribute[] = await Employee.findAll()
    res.json({ result: query });
}


export default { getallemp };