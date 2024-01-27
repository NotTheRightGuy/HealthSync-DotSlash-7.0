const { Router } = require("express");
const Patient = require("./Patient");
const Doctor = require("./Doctor");
const Diagnosis = require("./Diagnosis");

const app = Router();

app.use("/patient", Patient);
app.use("/doctor", Doctor);
app.use("/diagnosis", Diagnosis);

module.exports = app;
