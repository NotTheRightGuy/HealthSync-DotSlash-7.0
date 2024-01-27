const mongoose = require("mongoose");
const doctorSchema = mongoose.Schema({
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
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 150,
    },
    role: {
        type: String,
        default: "doctor",
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
    },
    address: {
        type: String,
        required: true,
        min: 2,
        max: 255,
    },
    education: {
        type: String,
        required: true,
        min: 2,
        max: 255,
    },
    hospital: {
        type: String,
        required: true,
        min: 2,
        max: 255,
    },
    experience_in_years: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    expertise: {
        type: Array,
        required: true,
    },
    patients_assigned: {
        type: Array,
        default: [],
    },
});

module.exports = mongoose.model("Doctor", doctorSchema);
