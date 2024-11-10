import * as z from "zod";

export const EmailSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    message: z.string(),
});