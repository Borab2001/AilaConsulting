// // import type { NextApiRequest, NextApiResponse } from 'next';
// import { render } from '@react-email/render';
// import AilaContactEmail from '@/emails/page';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request, res: Response) {
//     const { email, userFirstname } = await req.json();

//     const { data, error } = await resend.emails.send({
//         from: [email],
//         to: "<info@ailaconsulting.com>",
//         subject: "New contact submission",
//         html: render(AilaContactEmail({ userFirstname, email })),
//     });
// }