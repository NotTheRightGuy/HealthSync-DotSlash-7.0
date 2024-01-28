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

app.post("/predict", async (req, res) => {
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

app.post("/chat", async (req, res) => {
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

app.get("/get-all", (req, res) => {
    Diagnosis.find({}).then((result) => {
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

app.get("/get/:diagnosisID", (req, res) => {
    const diagnosisID = req.params.diagnosisID;
    Diagnosis.findById(diagnosisID)
        .then((result) => {
            if (!result) {
                res.status(404).json({
                    message: "Diagnosis not found",
                });
            } else {
                res.status(200).json({
                    message: "Diagnosis fetched successfully",
                    diagnosis: result,
                });
            }
        })
        .catch((err) => {
            res.status(400).json({
                message: "Error fetching diagnosis",
                error: err,
            });
        });
});

app.put("/update/:diagnosisID", (req, res) => {
    const { correctDisease, doctorNotes, doctorPres } = req.body;
    const diagnosisID = req.params.diagnosisID;

    Diagnosis.findById(diagnosisID)
        .then((result) => {
            if (!result) {
                res.status(404).json({
                    message: "Diagnosis not found",
                });
            } else {
                Diagnosis.findByIdAndUpdate(diagnosisID, {
                    disease: correctDisease,
                    doctorFeedback: doctorNotes,
                    doctorPres: doctorPres,
                    needFeedback: false,
                })
                    .then((result) => {
                        res.status(200).json({
                            message: "Diagnosis updated successfully",
                            diagnosis: result,
                        });
                    })
                    .catch((err) => {
                        res.status(400).json({
                            message: "Error updating diagnosis",
                            error: err,
                        });
                    });
            }
        })
        .catch((err) => {
            res.status(400).json({
                message: "Error updating diagnosis",
                error: err,
            });
        });
});

module.exports = app;
