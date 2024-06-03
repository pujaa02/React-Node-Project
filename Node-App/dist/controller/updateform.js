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
// route.get(
//     "/finduser/:id",
const finduser = async (req, res) => {
    const id = req.params.id;
    const query = await form_controller_1.default.findOne({ where: { emp_id: id } });
    res.json({ result: query });
};
// route.post(
//     "/updateemp/:id",
const updateemp = async (req, res) => {
    const id = req.params.id;
    const data = req.body.formData;
    try {
        await form_controller_1.default.update({ fname: data.fname, lname: data.lname, designation: data.designation, email: data.email, phone: data.phone, gender: data.gender, rel_status: data.rel_status, address1: data.address1, address2: data.address2, city: data.city, state: data.state, zipcode: data.zipcode, bd: data.bd }, { where: { emp_id: id } });
        res.json({ msg: "success" });
    }
    catch (error) {
        res.json({ msg: "failed" });
    }
};
// route.get(
//     "/deleteemp/:id",
const deletemp = async (req, res) => {
    const id = req.params.id;
    try {
        await form_controller_1.default.destroy({ where: { emp_id: id } });
        res.json({ msg: "success" });
    }
    catch (error) {
        res.json({ msg: "failed" });
    }
};
exports.default = { finduser, updateemp, deletemp };
//# sourceMappingURL=updateform.js.map