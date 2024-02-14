import Router from 'express';
import Auth from "./Auth";
const app = Router();

app.use("/auth", Auth);

export default app;
