import * as express from "express";
const route = express.Router();
import { Request, Response } from "express";
import Employee from "./form.controller";


route.get(
    "/getallemp",
    async (req: Request, res: Response) => {
        const query = await Employee.findAll()
        res.json({ result: query });
    }
);


export default route;