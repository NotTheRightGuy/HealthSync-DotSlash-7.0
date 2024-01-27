const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");
//! Middlewares
const logger = require("./middlewares/logger");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/v1", routes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    mongoose
        .connect(process.env.DB_URL)
        .then(() => {
            console.log("Connected to Mongo DB at port 27017");
        })
        .catch((err) => {
            console.log(err);
        });
});
