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
const route = express.Router();
const form_controller_1 = __importDefault(require("./form.controller"));
route.get("/finduser/:id", async (req, res) => {
    const id = req.params.id;
    const query = await form_controller_1.default.findOne({ where: { emp_id: id } });
    res.json({ result: query });
});
route.post("/updateemp/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body.formData;
    const { fname, lname, designation, email, phone, gender, rel_status, address1, address2, city, state, zipcode, bd, } = data;
    try {
        const updatedata = await form_controller_1.default.update({ fname: fname, lname: lname, designation: designation, email: email, phone: phone, gender: gender, rel_status: rel_status, address1: address1, address2: address2, city: city, state: state, zipcode: zipcode, bd: bd }, { where: { emp_id: id } });
        res.json({ msg: "success" });
    }
    catch (error) {
        res.json({ msg: "failed" });
    }
});
route.get("/deleteemp/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const result = await form_controller_1.default.destroy({ where: { emp_id: id } });
        res.json({ msg: "success" });
    }
    catch (error) {
        res.json({ msg: "failed" });
    }
});
exports.default = route;
//# sourceMappingURL=updateform.js.map