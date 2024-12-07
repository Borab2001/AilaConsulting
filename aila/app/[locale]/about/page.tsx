import { useTranslations } from 'next-intl';

import BentoLayout, { gridVariants } from "@/components/bento-layout";

export default function About() {

    const t = useTranslations('AboutPage');

    return (
       <BentoLayout gridVariants={gridVariants}>
            {t('title')}
        </BentoLayout>
    );
}
