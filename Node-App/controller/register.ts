import * as express from "express";
let route = express.Router();
import { Request, Response } from "express";

interface RegisterData {
    fname: string;
    lname: string;
    bd: string;
    email: string;
    phone: string;
    gender: string;
}

route.post("/register", async (req: Request, res: Response) => {
    const Registerresult: RegisterData = req.body.registerdata;

    const {
        fname,
        lname,
        email,
        phone,
        gender,
    } = Registerresult;
})


export default route;