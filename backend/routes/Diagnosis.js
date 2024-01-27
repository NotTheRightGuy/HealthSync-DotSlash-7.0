const { Router } = require("express");
const checkPatient = require("../middlewares/checkPatient");
const Diagnosis = require("../models/Diagnosis");
const axios = require("axios");
const app = Router();

app.post("/upload", checkPatient, (req, res) => {
    const patientID = req.body._id;
    const { disease, probability, modelFeedback, symptoms, notes } = req.body;

    const diagnosis = new Diagnosis({
        patientID,
        disease,
        probability,
        modelFeedback,
        symptoms,
        notes,
    });

    diagnosis
        .save()
        .then((result) => {
            res.status(200).json({
                message: "Diagnosis uploaded successfully",
                diagnosis: result,
            });
        })
        .catch((err) => {
            res.status(400).json({
                message: "Error uploading diagnosis",
                error: err,
            });
        });
});

app.post("/predict", checkPatient, async (req, res) => {
    const { _id, symptoms } = req.body;

    try {
        const result = await axios.post("http://127.0.0.1:1410/predict", {
            symptoms: symptoms,
        });
        if (result.data.error) {
            res.status(400).json(result.data);
        } else {
            res.status(200).json(result.data);
        }
    } catch (err) {
        res.status(400).json({
            message: "Error predicting, maybe the server is down",
            error: err,
        });
    }
});

app.post("/chat", checkPatient, async (req, res) => {
    const { message } = req.body;
    try {
        const result = await axios.post("http://127.0.0.1:1410/chat", {
            message: message,
        });
        if (result.data.error) {
            res.status(400).json(result.data);
        } else {
            res.status(200).json(result.data);
        }
    } catch (err) {
        res.status(400).json({
            message: "Error predicting, maybe the server is down",
            error: err,
        });
    }
});

app.get("/get-all/:patientID", (req, res) => {
    Diagnosis.find({ patientID: req.params.patientID }).then((result) => {
        if (result.length === 0) {
            return res.status(404).json({
                message: "No diagnosis found",
            });
        } else {
            return res.status(200).json({
                message: "Diagnosis fetched successfully",
                diagnosis: result,
            });
        }
    });
});

module.exports = app;
