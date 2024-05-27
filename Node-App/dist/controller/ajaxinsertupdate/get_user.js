"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../models/database"));
async function get_user(req, res) {
    let query = await database_1.default.getall(`select emp_id,fname,lname from emp_details`);
    res.json(query);
}
exports.default = get_user;
//# sourceMappingURL=get_user.js.map