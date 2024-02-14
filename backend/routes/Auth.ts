//TODO : Create Endpoints to
// 1. Create a Doctor
// 2. Create a Patient
// 3. Login
// 4. Update Account
// 5. Delete Account

// Express Imports
import Router from 'express';

const app = Router();

// Prisma Imports
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();
const Doctor = prisma.doctor;
const Patient = prisma.patient;
const Auth = prisma.auth;

// Schema Imports
import auth from '../schema/auth'
import patient from '../schema/patient'
import doctor from "../schema/doctor";

// Types
type patientBody = {
    firstName: string,
    lastName: string,
    age: number,
    bloodGroup: string,
    address: string,
    phone: string
}

type doctorBody = {
    firstName : string,
    lastName: string,
    age: number,
    phone: string,
    address : string,
    education : string,
    hospital : string,
    experience_in_years : number,
    expertise : string[],
}

// Create a new patient
app.post('/patient/sign-up', async (req, res) => {
    const {email, password} = req.body;
    const auth_valid = auth.safeParse({email, password});
    if (auth_valid.success) {
        try {
            const new_auth = await Auth.create({
                data: {
                    email, password
                }
            });

            const {firstName, lastName, age, bloodGroup, address, phone} = req.body;
            const patientBody: patientBody = {
                firstName, lastName, age, bloodGroup, address, phone
            }
            const patient_valid = patient.safeParse(patientBody);
            if (patient_valid.success) {
                const newPatient = await Patient.create({
                    data: {...patientBody, id: new_auth.id}
                })
                res.json({
                    msg: "New Patient created",
                    data: newPatient
                })
            }
            else{
                res.status(500).json({msg:"Something went wrong"})
            }

        } catch (err) {
            console.log(err);
            res.status(403).json({msg: "Error creating patient", data: err});
        }
    } else {
        res.status(403).json({"msg": "Invalid email/password format"})
    }
})

// Create a new Doctor
app.post('/doctor/sign-up', async (req, res) => {
    const {email, password} = req.body;
    const auth_valid = auth.safeParse({email, password});
    if (auth_valid.success) {
        try {
            const new_auth = await Auth.create({
                data: {
                    email, password
                }
            });

            const {firstName, lastName, age, phone, address, education, hospital, experience_in_years, expertise} = req.body;
            const doctorBody: doctorBody = {
                firstName, lastName, age, phone, address, education, hospital, experience_in_years, expertise
            }
            const doctor_valid = doctor.safeParse(doctorBody);
            console.log(doctor_valid);
            if (doctor_valid.success) {
                const newDoctor = await Doctor.create({
                    data: {...doctorBody, id: new_auth.id}
                })
                res.json({
                    msg: "New Doctor created",
                    data: newDoctor
                })
            }
            else{
                res.status(500).json({msg:"Something went wrong"})
            }

        } catch (err) {
            console.log(err);
            res.status(403).json({msg: "Error creating doctor", data: err});
        }
    } else {
        res.status(403).json({"msg": "Invalid email/password format"})
    }
})

export default app;

