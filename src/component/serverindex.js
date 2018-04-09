import express from "express";
import bodyParser from "body-parser";
import path from "path";
import users from "./express";

let app = express();

app.use(bodyParser.json());

app.use("/api/users", users);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

app.listen(4000, () => console.log("running"));
