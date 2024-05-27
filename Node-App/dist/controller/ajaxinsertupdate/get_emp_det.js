"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../models/database"));
async function emp_det(req, res) {
    let query = await database_1.default.getall(`select * from emp_details`);
    res.json(query);
}
exports.default = emp_det;
//# sourceMappingURL=get_emp_det.js.map