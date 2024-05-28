"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
let route = express.Router();
const user_controller_1 = __importDefault(require("./user.controller"));
const body_parser_1 = __importDefault(require("body-parser"));
route.use(body_parser_1.default.json());
route.use(body_parser_1.default.urlencoded({ extended: false }));
;
function createRandomString(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
route.post("/register", async (req, res) => {
    const Registerresult = req.body.registerdata;
    let accesskey = createRandomString(12);
    const { fname, lname, email, phone, gender, bd } = Registerresult;
    const registerinsert = await user_controller_1.default.create({ fname: fname, lname: lname, email: email, phone: phone, gender: gender, bd: bd, access_key: accesskey });
    const finalres = JSON.parse(JSON.stringify(registerinsert));
    let user_id = finalres.user_id;
    res.json({ actcode: accesskey, user_id: user_id, current_time: new Date() });
});
route.post("/password/:actcode", async (req, res) => {
    const PasswordData = req.body.PassData;
    const actcode = req.params.actcode;
    const { pass, repass } = PasswordData;
    const updatepass = await user_controller_1.default.update({ password: pass }, { where: { access_key: actcode } });
});
route.get("/checktime/:actcode", async (req, res) => {
    const actcode = req.params.actcode;
    let result = await user_controller_1.default.findOne({ where: { access_key: actcode } });
    const finalres = result?.dataValues;
    res.json({ result: finalres });
});
exports.default = route;
//# sourceMappingURL=register.js.map