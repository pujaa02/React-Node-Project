import * as express from "express";
let route = express.Router();
import { Request, Response } from "express";
import Employee from "./form.controller";


route.get(
    "/getallemp",
    async (req: Request, res: Response) => {
        let query = await Employee.findAll()
        res.json({ result: query });
    }
);


export default route;