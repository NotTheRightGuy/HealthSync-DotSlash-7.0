import Router from 'express';
import Auth from "./Auth";
import Patient from "./Patient";
const app = Router();

app.use("/auth", Auth);
app.use("/patient", Patient);
export default app;
