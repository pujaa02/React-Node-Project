"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../models/database"));
async function tech(req, res) {
    let query = await database_1.default.getall(`select * from know_techno`);
    res.json(query);
}
exports.default = tech;
//# sourceMappingURL=techno.js.map