"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../models/database"));
async function lan(req, res) {
    let query = await database_1.default.getall(`select * from language`);
    res.json(query);
}
exports.default = lan;
//# sourceMappingURL=language.js.map