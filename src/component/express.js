import express from "express";
import validateInput from "./users";

let app = express.Router();

app.post("/", (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if (isValid) {
    console.log(isValid);
    res.json({ success: true });
  } else {
    res.status(400).json(errors);
  }
});

export default app;
