import z from 'zod';

const auth = z.object({
    email : z.string().email(),
    password : z.string().min(4),
});

export default auth;