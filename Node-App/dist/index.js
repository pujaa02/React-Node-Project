"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = __importDefault(require("./routes/router"));
dotenv_1.default.config();
let port = process.env.PORT;
const cors_1 = __importDefault(require("cors"));
app.use((0, cookie_parser_1.default)());
// app.set("view engine", "ejs");
// app.use(express.static("public"));
app.use((0, cors_1.default)({ origin: "*", credentials: true }));
app.options('*', (0, cors_1.default)());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/", (req, res) => {
    res.send("hello");
});
try {
    app.listen(port, () => {
        console.log(`Server is running in port: ${port} `);
        app.use(router_1.default);
    });
}
catch (error) {
    console.log(`Error: ${error}`);
}
//# sourceMappingURL=index.js.map