require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

function checkPatient(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        res.status(401).json({
            message: "Token Not Found, Authentication failed",
        });
    } else {
        try {
            const decoded = jwt.verify(token, JWT_SECRET);

            if (decoded.role !== "patient") {
                throw new Error("Not a patient");
            } else {
                const prevBody = req.body;
                const newBody = {
                    ...prevBody,
                    ...decoded,
                };
                req.body = newBody;
                next();
            }
        } catch (error) {
            res.status(401).json({
                message: "Authentication failed",
                error: error,
            });
        }
    }
}

module.exports = checkPatient;
