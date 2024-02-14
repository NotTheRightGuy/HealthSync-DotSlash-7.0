import z from 'zod';

const doctor = z.object({
    firstName: z.string().min(2).max(255),
    lastName: z.string().min(2).max(255),
    age: z.number().min(0).max(150),
    phone: z.string(),
    address : z.string(),
    education : z.string(),
    hospital : z.string(),
    experience_in_years : z.number(),
    expertise : z.array(z.string())
});

export default doctor;