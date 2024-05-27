"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../models/database"));
async function work_exp(req, res) {
    let query = await database_1.default.getall(`select * from work_experience`);
    res.json(query);
}
exports.default = work_exp;
//# sourceMappingURL=work_exp.js.map