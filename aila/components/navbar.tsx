"use client";

import TransitionLink from "@/lib/transition-link";
import { motion } from "framer-motion";

import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from "next/navigation";


export const menuSlide = {
    initial: {
        x: "100%",
    },
    enter: {
        x: "0%",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]},
    },
    exit: {
        x: "100%",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]},
    },
};

export const slide = {
    initial: {
        x: "80px",
    },
    enter: (i: number) => ({
        x: "0px",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: i * 0.05},
    }),
    exit: (i: number) => ({
        x: "80px",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: i * 0.05},
    }),
};

const Navbar = () => {

    const t = useTranslations('Navbar');

    const links = [
        {
            name: t('home'),
            url: '/',
        },
        {
            name: t('about'),
            url: '/about',
        },
        {
            name: t('contact'),
            url: '/contact',
        },
        {
            name: t('services'),
            url: '/services',
        },
        
    ];
    

    const currentYear = new Date().getFullYear();

    const router = useRouter();
    const pathname = usePathname();

    const locales = [
        { code: "en", name: "English", flag: "🇬🇧" },
        { code: "fr", name: "Français", flag: "🇫🇷" },
        { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    ];

    // Handle language change
    const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = event.target.value;
        // Replace the current locale with the selected one
        const segments = pathname.split("/").filter(Boolean);
        if (locales.some((locale) => locale.code === segments[0])) {
            segments[0] = newLocale;
        } else {
            segments.unshift(newLocale);
        }
        router.push(`/${segments.join("/")}`);
    };

    return (
        <motion.div 
            variants={menuSlide} 
            initial="initial"
            animate="enter"
            exit="exit"
            className="fixed z-40 top-0 right-0 max-w-[400px] w-full flex justify-center h-screen bg-bento border-l border-border"
        >
            <div className="h-full p-menu md:py-24 flex flex-col justify-between">
                <nav className="flex flex-col gap-8 mt-[5vh] md:mt-20 text-5xl text-primary capitalize">
                    <p className="w-full text-sm uppercase text-subtitle">{t("navigation")}</p>
                    {
                        links.map((link, index) => {
                            return (
                                <motion.div 
                                    key={index}
                                    custom={index}
                                    variants={slide} 
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                >
                                    <TransitionLink href={link.url}>
                                        {link.name}
                                    </TransitionLink>
                                </motion.div>
                            )
                        })
                    }
                </nav>

                {/* Language Selector */}
                <div className="flex flex-col items-center gap-4">
                    <label htmlFor="language" className="text-sm uppercase text-subtitle">
                        {t("language")}
                    </label>
                    <select
                        id="language"
                        onChange={handleLocaleChange}
                        defaultValue={pathname.split("/")[1] || "en"}
                        className="p-2 border rounded-md text-primary"
                    >
                        {locales.map((locale) => (
                            <option key={locale.code} value={locale.code}>
                                {locale.flag} {locale.name}
                            </option>
                        ))}
                    </select>
                </div>
                
                <div className="flex flex-col justify-between gap-4 w-full uppercase">
                    <p className="text-sm uppercase text-subtitle">{t('copyright')}</p>
                    <span className="text-sm text-title capitalize">
                        &#169;{currentYear} Aila Consulting 
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
 
export default Navbar;