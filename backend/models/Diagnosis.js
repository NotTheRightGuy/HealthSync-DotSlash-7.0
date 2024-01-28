const mongoose = require("mongoose");

const schema = mongoose.Schema({
    patientID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true,
    },
    doctorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
    },
    disease: {
        type: String,
        default: "",
        required: true,
    },
    probability: {
        type: Number,
        default: 0,
        required: true,
    },
    modelFeedback: {
        type: String,
        default: "",
    },
    symptoms: {
        type: Array,
        default: [],
        required: true,
    },
    doctorPres: {
        type: String,
        default: "",
    },
    doctorFeedback: {
        type: String,
        default: "",
    },
    notes: {
        type: String,
        default: "",
    },
    needFeedback: {
        type: Boolean,
        default: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Diagnosis", schema);
