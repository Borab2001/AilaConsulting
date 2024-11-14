import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Preview,
	Section,
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

export const AilaContactEmail = ({
  	firstName,
	lastName,
	email,
	message
}: AilaContactEmailProps) => (
	<Html>
		<Head />
		<Preview>
			The sales intelligence platform that helps you uncover qualified leads.
		</Preview>
		
		<Body style={main}>
			<Container style={container}>
				<Img
					src="https://ailaconsulting.vercel.app/aila_bolder.svg"
					width="170"
					height="50"
					alt="Aila Consulting"
					style={logo}
				/>
				<Text style={paragraph}>First Name: {firstName},</Text>
				<Text style={paragraph}>Last Name: {lastName},</Text>
				<Text style={paragraph}>
					{message}
				</Text>
				<Hr style={hr} />
				<Text style={footer}>
					Hüseyinağa, İstiklal Cd. No:76, 34435 Beyoğlu / İstanbul, Türkiye
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

const logo = {
  	margin: "0 auto",
};

const paragraph = {
	fontSize: "16px",
	lineHeight: "26px",
};

const btnContainer = {
  	textAlign: "center" as const,
};

const button = {
	backgroundColor: "#5F51E8",
	borderRadius: "3px",
	color: "#fff",
	fontSize: "16px",
	textDecoration: "none",
	textAlign: "center" as const,
	display: "block",
	padding: "12px",
};

const hr = {
	borderColor: "#cccccc",
	margin: "20px 0",
};

const footer = {
	color: "#8898aa",
	fontSize: "12px",
};
