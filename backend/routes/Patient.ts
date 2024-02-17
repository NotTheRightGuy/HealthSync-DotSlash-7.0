import Router from "express";
import checkPatient from "../middlewares/checkPatient";
import {PrismaClient} from "@prisma/client";
const Diagnosis = new PrismaClient().diagnosis;

const app = Router();

app.get("/decode-token", checkPatient, (req, res) => {
  res.json(req.body.patient);
});

app.post("/save-diagnosis", checkPatient, async (req, res) => {
  const patientID = req.body.patient.id;
  const diagnosis_name = req.body.diagnosis_name;
  const diagnosis_confidence = req.body.diagnosis_confidence;
  const feedback = req.body.feedback;
  const medicines = req.body.medicines;
  const prescriptionURL = req.body.prescriptionURL;
  try{
    const diagnosis = await Diagnosis.create({
        data: {
        patientID,
        diagnosis_name,
        diagnosis_confidence,
        feedback,
        medicines,
        prescriptionURL,
        },
    });
    res.json({msg: "Prescription uploaded successfully", data: diagnosis});
    } catch (err) {
        res.status(500).json({err: "Something went wrong"});
    }
});

app.get("/get-diagnosis", checkPatient, async (req, res) => {
    const patientID = req.body.patient.id;
  const diagnosis = await Diagnosis.findMany({
    where: {
      patientID,
    },
  });
  res.json({diagnosis});
});

app.get("/diagnosis/:id", checkPatient, async (req, res) => {
    const diagnosis = await Diagnosis.findUnique({
        where: {
        id: parseInt(req.params.id),
        },
    });
    res.json({diagnosis});
});

export default app;