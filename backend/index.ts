import express from 'express';
import cors from 'cors';
import routes from './routes';
require("dotenv").config();

// Middlewares
import logger from "./middlewares/logger";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use("/api/v1", routes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
