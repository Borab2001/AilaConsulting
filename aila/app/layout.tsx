import { Inter } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Aila Consulting",
	description: "Fast and reliable visa, ikamet, and work permit consulting in Istanbul.",
	keywords: "visa, ikamet, residence permit, work permit, turkey, istanbul, aila, consulting",
	charset: "UTF-8",
	httpEquiv: "X-UA-Compatible",
	content: "IE=edge",
	viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta charSet={metadata.charset} />
				<meta
                    httpEquiv={metadata.httpEquiv}
                    content={metadata.content}
                />
                <meta name="viewport" content={metadata.viewport} />
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
				<meta name="apple-mobile-web-app-title" content="Aila" />
				<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</head>
			<body className={inter.className}>
				{children}
				<Toaster />
				<Analytics />
			</body>
		</html>
	);
}
