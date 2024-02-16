import z from 'zod';

const patient = z.object({
    firstName: z.string().min(2).max(255),
    lastName: z.string().min(2).max(255),
    age: z.number().min(0).max(150),
    bloodGroup: z.string().min(2).max(4),
    address: z.string().min(2).max(255),
    phone: z.string(),
    avatarUrl: z.string().url()
});

export default patient;