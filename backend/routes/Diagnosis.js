const { Router } = require("express");
const checkPatient = require("../middlewares/checkPatient");
const axios = require("axios");
const app = Router();

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

module.exports = app;
