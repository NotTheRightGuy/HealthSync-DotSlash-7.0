const { Router } = require("express");
const mongoose = require('mongoose');
const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");
const Auth = require("../models/Auth");
const Prescription = require("../models/Prescription");

const patientSchema = require("../schema/patientSchema");
const jwt = require("jsonwebtoken");
const app = Router();
const supabase = require("../supabase");

const checkPatient = require("../middlewares/checkPatient");
const { hashPassword, comparePassword } = require("../utils/passwordHasher");

app.post("/sign-up", async (req, res) => {
    const validation = patientSchema.safeParse(req.body);
    if (!validation.success) {
        res.status(400).json({
            error : "Validation failed. Please check your inputs"
        });
    } else {
        const patient = new Patient({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            bloodGroup: req.body.bloodGroup,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email
        });

        const auth = new Auth({
            email: req.body.email,
            password: hashPassword(req.body.password),
        });

        const user = await Auth.findOne({email:req.body.email});
        if(user){
            res.status(409).json({error:"Email already exists"});
            return;
        }
        const doctor = await Doctor.find({});
        if(doctor.length === 0){
            res.status(402).json({error:"No doctor to assign"});
            return
        }
        await auth.save();
        const patientSaved = await patient.save();
        await Doctor.updateMany({},{$push : {
                patients_assigned: patientSaved._id
        }})
        res.json({error:"Patient created successfully"});
    }
});

app.post("/sign-in", (req, res) => {
    const { email, password } = req.body;

    Auth.findOne({ email: email })
        .then((data) => {
            if (comparePassword(password, data.password) === true) {
                Patient.find({ email: email }).then((data) => {
                    const token = jwt.sign(
                        {
                            data: data[0],
                        },
                        process.env.JWT_SECRET
                    );

                    res.status(200).json({
                        message: "Login successful",
                        user: data,
                        token: token,
                    });
                });
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

app.get("/get-patient/:id", (req, res) => {
    Patient.findById(req.params.id)
        .then((data) => {
            res.status(200).json({
                message: "Patient found",
                data: data,
            });
        })
        .catch((err) => {
            res.status(400).json({
                message: "Patient not found",
            });
        });
});

app.post("/upload-prescription", checkPatient, (req, res) => {
    const patientID = req.body._id;
    const { prescription_path, prescription_name } = req.body;
    if (!prescription_path) {
        res.status(400).json({
            message: "Prescription not found",
        });
    }

    const extension = prescription_path.split(".").pop();

    supabase.storage
        .from("prescriptions")
        .upload(
            `prescriptions/${patientID}/${prescription_name}${Date.now()}.${extension}`,
            prescription_path
        )
        .then((data) => {
            console.log(data);
            const newPrescription = new Prescription({
                patientId: patientID,
                name: prescription_name,
                prescriptionId: data.data.id,
            });

            newPrescription
                .save()
                .then((data) => {
                    res.status(200).json({
                        message: "Prescription uploaded successfully",
                        data: data,
                    });
                })
                .catch((err) => {
                    res.status(400).json({
                        message: "Error uploading prescription",
                        error: err,
                    });
                });
        })
        .catch((err) => {
            res.status(400).json({
                message: "Error uploading prescription",
                error: err,
            });
        });
});

app.get("/get-prescriptions", checkPatient, (req, res) => {
    Prescription.find({ patientId: req.body._id })
        .then((data) => {
            res.status(200).json({
                message: "Prescriptions found",
                data: data,
            });
        })
        .catch((err) => {
            res.status(400).json({
                message: "Prescriptions not found",
                error: err,
            });
        });
});

app.get("/get-prescription/:id", checkPatient, (req, res) => {
    Prescription.findById(req.params.id)
        .then((data) => {
            res.status(200).json({
                message: "Prescription found",
                data: data,
            });
        })
        .catch((err) => {
            res.status(400).json({
                message: "Prescription not found",
                error: err,
            });
        });
});

module.exports = app;
