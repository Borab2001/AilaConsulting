"use server";

import { EmailSchema } from "@/schema";
import { z } from "zod";
import { Resend } from "resend";
import AilaContactEmail from "@/emails/page";
import React from "react";


const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (values: z.infer<typeof EmailSchema>) => {
    try {
        const messageLines = values.message.split('\n');
        
        const { data, error } = await resend.emails.send({
            from: 'website@ailaconsulting.com',
            to: 'info@ailaconsulting.com',
            subject: 'New Contact Submission',
            replyTo: values.email,
            react: React.createElement(AilaContactEmail, {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                // message: values.message,
                messageLines: messageLines,

            }),
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