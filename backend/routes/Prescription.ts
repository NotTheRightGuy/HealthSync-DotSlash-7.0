// Express Imports
import Router from 'express';

const app = Router();

// Prisma Imports
import {PrismaClient} from '@prisma/client'
import checkPatient from "../middlewares/checkPatient";

const prisma = new PrismaClient();
const Prescription = prisma.prescription;


app.post('/upload', checkPatient, async (req, res) => {
    const patientID = req.body.patient.id;
    const prescriptionURL = req.body.prescriptionURL;
    const prescriptionName = req.body.prescriptionName;
    const prescriptionDescription = req.body.prescriptionDescription;

    const prescription = await Prescription.create({
        data: {
            patientID: patientID,
            prescriptionName: prescriptionName,
            prescriptionDescription: prescriptionDescription,
            prescriptionURL: prescriptionURL,
        }
    });

    if(prescription) {
        res.status(200).json({message: "Prescription Uploaded Successfully"});
    }
    else {
        res.status(500).json({message: "Prescription Upload Failed"});
    }
});

app.get('/get-all', checkPatient, async (req, res) => {
    const patientID = req.body.patient.id;

    const prescriptions = await Prescription.findMany({
        where: {
            patientID: patientID
        }
    });

    if(prescriptions) {
        res.status(200).json(prescriptions);
    }
    else {
        res.status(500).json({message: "Prescription Fetch Failed"});
    }
});

export default app;
