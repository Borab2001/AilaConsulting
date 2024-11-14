import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Preview,
	Text,
} from "@react-email/components";
import * as React from "react";

interface AilaContactEmailProps {
	firstName: string;
	lastName: string;
	email: string;
	message: string;
}

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "";

const currentYear = new Date().getFullYear();


export const AilaContactEmail = ({
  	firstName,
	lastName,
	email,
	message
}: AilaContactEmailProps) => (
	<Html>
		<Head />
		<Preview>
			New Contact Submission from {firstName} {lastName}.
		</Preview>
		
		<Body style={main}>
			<Container style={container}>
				<Heading style={title}>New Contact Submission</Heading>
				<Text style={paragraph}>First Name: {firstName}</Text>
				<Text style={paragraph}>Last Name: {lastName}</Text>
				<Text style={paragraph}>Email: {email}</Text>
				<Text style={paragraph}>
					{message}
				</Text>
				<Hr style={hr} />
				<Text style={footer}>
					Hüseyinağa, İstiklal Cd. No:76, 34435 Beyoğlu / İstanbul, Türkiye
					<br />
					&#169; Aila Consulting {currentYear}
				</Text>
			</Container>
		</Body>
	</Html>
);

// AilaContactEmail.PreviewProps = {
//   	firstName: {firstName},
// 	lastName: {lastName},

// } as AilaContactEmailProps;

export default AilaContactEmail;

const main = {
	backgroundColor: "#ffffff",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
};

const title = {
	color: "#000000",
	fontSize: "24px",
	fontWeight: "600",
	marginBottom: "20px",
}

const paragraph = {
	fontSize: "16px",
	lineHeight: "26px",
};

const hr = {
	borderColor: "#cccccc",
	margin: "20px 0",
};

const footer = {
	color: "#cccccc",
	fontSize: "12px",
};
