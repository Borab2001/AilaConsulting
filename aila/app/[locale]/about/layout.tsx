import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('about.title'),
        description: t('about.description'),
        keywords: t('about.keywords'),
    };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}