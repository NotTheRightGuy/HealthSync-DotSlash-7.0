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

// Types Imports
import patientBody from "../types/patientBody";
import doctorBody from "../types/doctorBody";

// JWT Imports
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET

// Util Imports
import {comparePassword, hashPassword} from '../utils/passwordHasher';


// Create a new patient
app.post('/patient/sign-up', async (req, res) => {
    const {email, password} = req.body;
    const auth_valid = auth.safeParse({email, password});
    if (auth_valid.success) {
        try {
            const hashedPassword = hashPassword(password);
            const new_auth = await Auth.create({
                data: {
                     email, password: hashedPassword
                }
            });

            const {firstName, lastName, age, bloodGroup, address, phone} = req.body;
            const avatarUrl = `https://api.dicebear.com/7.x/avataaars-neutral/svg?seed=${firstName}+${lastName}`
            const patientBody: patientBody = {
                firstName, lastName, age, bloodGroup, address, phone, avatarUrl
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
            } else {
                res.status(500).json({err: "Invalid input format, Please try again"})
            }

        } catch (err) {
            console.log(err);
            res.status(403).json({err: "Error creating patient", data: err});
        }
    } else {
        res.status(403).json({err: "Invalid email/password format"})
    }
})

// Create a new Doctor
app.post('/doctor/sign-up', async (req, res) => {
    const {email, password} = req.body;
    const auth_valid = auth.safeParse({email, password});
    if (auth_valid.success) {
        try {
            const hashedPassword = hashPassword(password);
            const new_auth = await Auth.create({
                data: {
                    email, password: hashedPassword, isDoctor: true
                }
            });

            const {
                firstName,
                lastName,
                age,
                phone,
                address,
                education,
                hospital,
                experience_in_years,
                expertise
            } = req.body;
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
            } else {
                res.status(500).json({msg: "Invalid Input Format, Please try again"})
            }

        } catch (err) {
            console.log(err);
            res.status(403).json({msg: "Email already exists", err: err});
        }
    } else {
        res.status(403).json({"msg": "Invalid email/password format"})
    }
})

app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const auth_valid = auth.safeParse({email, password});
    if (auth_valid.success) {
        try {
            const foundUser = await Auth.findFirst({
                where: {
                    email: email
                }
            })
            if (foundUser) {
                if (comparePassword(password, foundUser.password) && JWT_SECRET) {
                    res.json({
                        msg: "Login successful", data: {
                            id: foundUser.id,
                            email: foundUser.email,
                            isDoctor: foundUser.isDoctor
                        },
                        token: jwt.sign({
                            id: foundUser.id,
                            email: foundUser.email,
                            isDoctor: foundUser.isDoctor
                        }, JWT_SECRET)
                    })
                } else {
                    res.json({err: "Authentication failed. Invalid Password"});
                }
            } else {
                res.status(404).json({err: "User not found"});
            }
        } catch (err) {
            res.status(401).json({err: err});
        }
    } else {
        res.status(401).json({err: "Invalid email/password format"});
    }
})

export default app;

