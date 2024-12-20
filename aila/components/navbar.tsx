"use client";

import TransitionLink from "@/lib/transition-link";
import FlagDropdown from "./flag-dropdown";
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
        { code: "en", flag: "🇬🇧" },
        { code: "fr", flag: "🇫🇷" },
        { code: "tr", flag: "🇹🇷" },
    ];

    const currentLocale = pathname.split("/")[1] || "en";

    const handleLocaleChange = (newLocale: string) => {
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
            {/* Flag Dropdown */}
            <FlagDropdown
                locales={locales}
                currentLocale={currentLocale}
                onLocaleChange={handleLocaleChange}
            />
            <div className="h-full p-menu md:py-24 flex flex-col justify-between">
                <nav className="flex flex-col gap-8 mt-[5vh] md:mt-20 text-5xl text-primary capitalize">
                    <p className="w-full text-sm uppercase text-subtitle">{t("navigation")}</p>
                    {
                        links.map((link, index) => {
                            // Construct locale-aware path
                            const localizedPath =
                                link.url === "/"
                                    ? `/${currentLocale}`
                                    : `/${currentLocale}${link.url}`;
                            const isActive =
                                pathname === localizedPath ||
                                (pathname === `/${currentLocale}` && link.url === "/");

                            return (
                                <motion.div 
                                    key={index}
                                    custom={index}
                                    variants={slide} 
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                    className="relative"
                                >
                                    <TransitionLink
                                        href={link.url}
                                        className={`block relative ${
                                            isActive
                                                ? "before:content-[''] before:w-3 before:h-3 before:rounded-full before:bg-primary before:absolute before:-left-8 before:top-1/2 before:-translate-y-1/2"
                                                : ""
                                        }`}
                                    >
                                        {link.name}
                                    </TransitionLink>
                                </motion.div>
                            )
                        })
                    }
                </nav>


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