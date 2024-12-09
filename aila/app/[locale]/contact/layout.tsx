import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('contact.title'),
        description: t('contact.description'),
        keywords: t('contact.keywords'),
    };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}