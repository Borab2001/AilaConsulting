"use server";

import { EmailSchema } from "@/schema";
import { z } from "zod";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (values: z.infer<typeof EmailSchema>) => {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Aila Website <website@ailaconsulting.com>',
            to: 'borabalos9@gmail.com',
            subject: 'New Contact Submission',
            replyTo: values.email,
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