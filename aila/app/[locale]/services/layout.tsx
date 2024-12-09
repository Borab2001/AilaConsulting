import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('services.title'),
        description: t('services.description'),
        keywords: t('services.keywords'),
    };
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}