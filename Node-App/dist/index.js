"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// import cookieParser from "cookie-parser";
const dotenv_1 = __importDefault(require("dotenv"));
// import main from "./routes/router";
dotenv_1.default.config();
let port = process.env.PORT;
// app.use(cookieParser());
// app.set("view engine", "ejs");
// app.use(express.static("public"));
app.get("/", (req, res) => {
    res.send("hello");
});
try {
    app.listen(port, () => {
        console.log(`Server is running in port: ${port} `);
        // app.use(main);
    });
}
catch (error) {
    console.log(`Error: ${error}`);
}
//# sourceMappingURL=index.js.map