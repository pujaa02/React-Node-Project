import * as express from "express";
let route = express.Router();
import { Request, Response } from "express";
import User from "./user.controller";
import parser from "body-parser";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import { Model, Optional } from 'sequelize';
import { UserAttributes, PasswordData, RegisterData } from "../interfacefile";
route.use(parser.json());
route.use(parser.urlencoded({ extended: false }));

type UserCreationAttributes = Optional<UserAttributes, 'id'>;

const jwtsecret = process.env.JWT_SECRET;

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
    const Registerresult: RegisterData = req.body.RegData;

    let accesskey = createRandomString(12);

    const {
        fname,
        lname,
        email,
        phone,
        gender,
        bd
    } = Registerresult;
    try {
        const registerinsert: Model<UserAttributes, UserCreationAttributes> = await User.create({ fname: fname, lname: lname, email: email, phone: phone, gender: gender, bd: bd, access_key: accesskey });
        const finalres = JSON.parse(JSON.stringify(registerinsert))
        let user_id = finalres.user_id;
        res.json({ message: "success", actcode: accesskey, user_id });
    } catch (error) {
        res.json({ message: "failed" });
    }
})
route.get("/activatecheck/:user_id", async (req: Request, res: Response) => {
    let user_id: string = req.params.user_id;

    let result = await User.findOne({ where: { user_id: user_id } })
    const finalres = result?.dataValues;
    const d1 = new Date();
    const d2 = new Date(finalres.createdAt);
    var diff = (d1.getTime() - d2.getTime()) / 1000;
    var diffsec = d1.getSeconds() - d2.getSeconds();
    diff /= 60 * 60;
    let final2 = Math.round(diffsec);
    if (final2 <= 60 && final2 >= 0) {
        return res.json({ message: "success" })
    } else {
        return res.json({ message: "failed" })
    }
})

route.get("/deleteuser/:id", async (req: Request, res: Response) => {
    const user_id: string = req.params.id;
    let result = await User.update({ isdeleted: 1, deleted_at: new Date() }, { where: { user_id: user_id } })
    res.json({ msg: "User Deleted !!" })
});

route.post("/password/:user_id/:actcode", async (req: Request, res: Response) => {
    const actcode: string = req.params.actcode;
    const user_id: string = req.params.user_id;
    const { pass, repass }: PasswordData = req.body.PassData;

    bcrypt.hash(pass, 7, async (error, hashedPassword) => {
        if (error) {
            console.log(error);
        }
        try {
            const updatepass = await User.update({ password: hashedPassword }, { where: { access_key: actcode, user_id: user_id } });
            res.json({ msg: "Success" })
        } catch (error) {
            res.json({ msg: "Something Went Wrong!!" })
        }
    }
    );
});
route.get("/checkuser/:email/:pass", async (req: Request, res: Response) => {
    const email: string = req.params.email;
    const pass: string = req.params.pass;
    try {
        const result = await User.findOne({ where: { email: email } });
        if (result?.dataValues) {
            const dbuser = result?.dataValues;

            let isPassSame = await bcrypt.compare(pass, dbuser.password);
            if (isPassSame === true) {

                let token: string = jwt.sign(
                    { email: dbuser.email },
                    jwtsecret as string,
                    { expiresIn: "1h" },
                );
                res.cookie("token", token, { httpOnly: false, secure: true, maxAge: 24 * 60 * 60 * 1000, sameSite: 'none' }).json({ msg: "Success", token });
            } else {
                res.json({ msg: "wrong Data" })
            }
        } else {
            res.json({ msg: "wrong Data" })
        }
    } catch (error) {
        res.json({ msg: "No data found!!" })
    }
});

route.get("/finduser/:email", async (req: Request, res: Response) => {
    const email: string = req.params.email;
    try {
        const result = await User.findOne({ where: { email: email, isdeleted: 0 } });
        if (result?.dataValues) {
            const dbuser = result?.dataValues;
            res.json({ msg: "Success", id: dbuser.user_id });
        } else {
            res.json({ msg: "wrong Data" })
        }
    }
    catch (error) {
        res.json({ msg: "No data found!!" })
    }
});

export default route;

