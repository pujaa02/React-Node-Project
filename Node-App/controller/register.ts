import * as express from "express";
let route = express.Router();
import { Request, Response } from "express";
import User from "./user.controller";
import parser from "body-parser";
import bcrypt from "bcryptjs";
import { Model, Optional } from 'sequelize';
route.use(parser.json());
route.use(parser.urlencoded({ extended: false }));

interface RegisterData {
    fname: string;
    lname: string;
    email: string;
    phone: string;
    gender: string;
    bd: string;
}
interface PasswordData {
    pass: string;
    repass: string;
}
interface UserAttributes {
    id: number;
    user_id: string;
    fname: string;
    lname: string;
    email: string;
    phone: string;
    gender: string;
    bd: string;
    password: string
    access_key: string;
};

type UserCreationAttributes = Optional<UserAttributes, 'id'>;

function createRandomString(length: number): string {
    const chars: string =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result: string = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

route.post("/register", async (req: Request, res: Response) => {
    const Registerresult: RegisterData = req.body.registerdata;

    let accesskey = createRandomString(12);

    const {
        fname,
        lname,
        email,
        phone,
        gender,
        bd
    } = Registerresult;

    const registerinsert: Model<UserAttributes, UserCreationAttributes> = await User.create({ fname: fname, lname: lname, email: email, phone: phone, gender: gender, bd: bd, access_key: accesskey });

    const finalres = JSON.parse(JSON.stringify(registerinsert))
    let user_id = finalres.user_id;
    res.json({ actcode: accesskey, user_id: user_id, current_time: new Date() });

})
route.post("/password/:actcode", async (req: Request, res: Response) => {
    const PasswordData: PasswordData = req.body.PassData;
    const actcode: string = req.params.actcode;
    const { pass, repass } = PasswordData;
    const updatepass = await User.update({ password: pass }, { where: { access_key: actcode } });

});
route.get("/checktime/:actcode", async (req: Request, res: Response) => {
    const actcode: string = req.params.actcode;
    let result = await User.findOne({ where: { access_key: actcode } })
    const finalres = result?.dataValues
    res.json({ result: finalres })
})


export default route;