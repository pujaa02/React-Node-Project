import express, { Application } from "express";
const app: Application = express();
// import cookieParser from "cookie-parser";
import dotenv from "dotenv";
// import main from "./routes/router";
dotenv.config();
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
} catch (error) {
  console.log(`Error: ${error}`);
}
