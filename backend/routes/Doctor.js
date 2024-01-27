const { Router } = require("express");
const docter = require("../models/Doctor");
const auth = require("../models/Auth");
const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../utils/passwordHasher");
const app = Router();

app.post("/sign-up", (req, res) => {
    const {
        firstName,
        lastName,
        age,
        phone,
        email,
        password,
        address,
        education,
        hospital,
        experience_in_years,
        expertise,
    } = req.body;

    const newDoctor = new docter({
        firstName,
        lastName,
        age,
        phone,
        email,
        address,
        education,
        hospital,
        experience_in_years,
        expertise,
    });

    const newAuth = new auth({
        email,
        password: hashPassword(password),
        isDoctor: true,
    });

    newAuth
        .save()
        .then(() => {
            newDoctor
                .save()
                .then(() => {
                    res.status(200).json({
                        message: "Doctor registered successfully",
                    });
                })
                .catch((err) => {
                    res.status(400).json({
                        message: "Doctor registration failed",
                        error: err,
                    });
                });
        })
        .catch((err) => {
            if (err.code === 11000) {
                return res.status(400).json({
                    message: "Email already exists",
                    error: err,
                });
            }
            res.status(400).json({
                message: "Doctor registration failed",
                error: err,
            });
        });
});

app.post("/sign-in", (req, res) => {
    const { email, password } = req.body;

    auth.findOne({ email })
        .then((user) => {
            if (!user) {
                return res.status(404).json({
                    message: "User not found",
                });
            }

            if (!comparePassword(password, user.password)) {
                return res.status(400).json({
                    message: "Invalid password",
                });
            } else {
                docter
                    .findOne({ email })
                    .then((docter) => {
                        const token = jwt.sign(
                            {
                                docter,
                            },
                            process.env.JWT_SECRET
                        );

                        res.status(200).json({
                            message: "Login successful",
                            token,
                        });
                    })
                    .catch((err) => {
                        res.status(400).json({
                            message: "Doctor not found",
                            error: err,
                        });
                    });
            }
        })
        .catch((err) => {
            res.status(400).json({
                message: "Login failed",
                error: err,
            });
        });
});

app.get("/get-doctor/:id", (req, res) => {
    docter
        .findById(req.params.id)
        .then((doctor) => {
            res.status(200).json({
                message: "Doctor found",
                doctor,
            });
        })
        .catch((err) => {
            res.status(400).json({
                message: "Doctor not found",
                error: err,
            });
        });
});

app.get("/get-patients/:id", (req, res) => {
    docter
        .findById(req.params.id)
        .then((doctor) => {
            res.status(200).json({
                message: "Patients found",
                patients: doctor.patients_assigned,
            });
        })
        .catch((err) => {
            res.status(400).json({
                message: "Patients not found",
                error: err,
            });
        });
});

module.exports = app;
