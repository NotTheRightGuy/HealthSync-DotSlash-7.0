const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        min: 2,
        max: 255,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 4,
        max: 255,
    },
    isDoctor: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("Auth", authSchema);
