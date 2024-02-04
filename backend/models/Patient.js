const mongoose = require("mongoose");
const patientSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 255,
    },
    lastName: {
        type: String,
        min: 2,
        max: 255,
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 150,
    },
    bloodGroup: {
        type: String,
        required: true,
        min: 2,
        max: 10,
    },
    role: {
        type: String,
        default: "patient",
    },
    address: {
        type: String,
        min: 2,
        max: 255,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        min: 2,
        max: 255,
        unique: true,
    }
});

module.exports = mongoose.model("Patient", patientSchema);
