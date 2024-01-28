const { Router } = require("express");
const Auth = require("../models/Auth");
const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");

require("dotenv").config();

const { comparePassword } = require("../utils/passwordHasher");
const jwt = require("jsonwebtoken");

const app = Router();

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    Auth.findOne({ email: email })
        .then((data) => {
            if (comparePassword(password, data.password) == true) {
                if (data)
                    if (data.isDoctor == true) {
                        Doctor.findOne({ email: email }).then((doctor) => {
                            const token = jwt.sign(
                                {
                                    _id: doctor._id,
                                    name: doctor.name,
                                    email: doctor.email,
                                    role: "doctor",
                                },
                                process.env.JWT_SECRET
                            );
                            res.status(200).json({
                                message: "Login success",
                                token: token,
                                data: doctor,
                            });
                        });
                    } else {
                        Patient.findOne({ email: email }).then((patient) => {
                            const token = jwt.sign(
                                {
                                    _id: patient._id,
                                    name: patient.name,
                                    email: patient.email,
                                    role: "patient",
                                },
                                process.env.JWT_SECRET
                            );
                            res.status(200).json({
                                message: "Login success",
                                token: token,
                                data: patient,
                            });
                        });
                    }
            } else {
                res.status(400).json({
                    message: "Invalid password",
                });
            }
        })
        .catch((err) => {
            res.status(400).json({
                message: "Invalid email",
                error: err,
            });
        });
});

module.exports = app;
