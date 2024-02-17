import Router from 'express';
import Auth from "./Auth";
import Patient from "./Patient";
import Prescription from "./Prescription";
const app = Router();

app.use("/auth", Auth);
app.use("/patient", Patient);
app.use("/prescription", Prescription);
export default app;
