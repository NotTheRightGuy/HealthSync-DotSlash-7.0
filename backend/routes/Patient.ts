import Router from "express";
import checkPatient from "../middlewares/checkPatient";
const app = Router();

app.get("/decode-token", checkPatient, (req, res) => {
  res.json(req.body.patient);
});



export default app;