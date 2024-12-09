import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });


export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('home.title'),
        description: t('home.description'),
        keywords: t('home.keywords'),
    };
}

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width'
}

export default async function RootLayout({
	children,
	params: {locale}
}: Readonly<{
	children: React.ReactNode;
	params: {locale: string};
}>) {

	// Ensure that the incoming `locale` is valid
	if (!routing.locales.includes(locale as any)) {
		notFound();
	}
	 
	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();
	
	return (
		<html lang={locale}>
			<head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="apple-mobile-web-app-title" content="Aila" />
				<meta name="theme-color" content="#050505" />
				<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</head>
			<body className={inter.className}>
				<NextIntlClientProvider messages={messages}>
					{children}
					<Toaster />
					<Analytics />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
