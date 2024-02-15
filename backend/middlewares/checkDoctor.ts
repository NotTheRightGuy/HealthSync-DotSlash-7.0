import jwt, {JwtPayload} from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET;
import {RequestHandler} from "express";
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();
const Doctor = prisma.doctor;

const checkDoctor : RequestHandler = async (req, res, next ) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        res.status(401).json({
            message: "Token Not Found, Authentication failed",
        });
    } else {
        try {
            if(JWT_SECRET) {
                const decoded  = jwt.verify(token, JWT_SECRET) as JwtPayload;
                if(decoded.isDoctor){
                    // User is a doctor
                    const foundDoctor = await Doctor.findFirst({
                        where:{
                            id:decoded.id
                        }
                    })
                    req.body = {...req.body, doctor: foundDoctor};
                    next();
                }
                else{
                    res.status(403).json({err:"User not a doctor"});
                }
            }
            else{
                res.status(501).json({msg:"No JWT Secret Found"});
            }
        } catch (error) {
            res.status(401).json({
                message: "Authentication failed",
                error: error,
            });
        }
    }
}

export default checkDoctor;
