const { z } = require("zod");

const patientSchema = z.object({
    firstName: z.string().min(2).max(255),
    lastName: z.string().min(2).max(255),
    age: z.number().min(0).max(150),
    bloodGroup: z.string().min(2).max(10),
    address: z.string().min(2).max(255),
    phone: z.number(),
    email: z.string().email().min(2).max(255),
    password: z.string().min(4).max(255),
});

module.exports = patientSchema;
