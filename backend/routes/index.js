const { Router } = require("express");
const Patient = require("./Patient");
const Doctor = require("./Doctor");

const app = Router();

app.use("/patient", Patient);
app.use("/doctor", Doctor);

module.exports = app;
