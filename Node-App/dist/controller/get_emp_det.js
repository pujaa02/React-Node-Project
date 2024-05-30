"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const form_controller_1 = __importDefault(require("./form.controller"));
async function emp_det(req, res) {
    let query = await form_controller_1.default.findAll();
    res.json(query);
}
exports.default = emp_det;
//# sourceMappingURL=get_emp_det.js.map