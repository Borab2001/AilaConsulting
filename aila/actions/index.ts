"use server";

import { EmailSchema } from "@/schema";
import { z } from "zod";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (values: z.infer<typeof EmailSchema>) => {
    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: values.email,
            subject: 'Hello world',
            // react: EmailTemplate({ firstName: 'John' }),
            html: `<h1>Hello ${values.firstName}</h1>`,
        });
        
        if (error) {
            console.error(error);
            throw new Error("Error while sending email");
        }

        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Error while sending email");
    }
};