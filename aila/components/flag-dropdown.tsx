"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface FlagDropdownProps {
    locales: { code: string; flag: string }[];
    currentLocale: string;
    onLocaleChange: (locale: string) => void;
}

const FlagDropdown = ({ locales, currentLocale, onLocaleChange }: FlagDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    // Find the current flag
    const currentFlag = locales.find((locale) => locale.code === currentLocale)?.flag;

    // Reorder locales: currentLocale first, then others
    const sortedLocales = [
        ...locales.filter((locale) => locale.code === currentLocale),
        ...locales.filter((locale) => locale.code !== currentLocale),
    ];

    // Handle language switch with fade-out effect
    const handleLanguageChange = (newLocale: string) => {
        setIsOpen(false);
        document.body.style.transition = "opacity 0.5s ease-in-out";
        document.body.style.opacity = "0";

        setTimeout(() => {
            onLocaleChange(newLocale);
            setTimeout(() => {
                document.body.style.opacity = "1";
            }, 500);
        }, 500);
    };

    // Dropdown animation variants
    const dropdownVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.2 } },
    };

    return (
        <div className="absolute top-4 left-4 select-none">
            <div className="relative inline-block">
                {/* Trigger */}
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="flex items-center justify-center p-2 bg-bento border border-border rounded-2xl w-16 h-16 m-0 bg-transparent focus:outline-none hover:bg-element"
                >
                    <span className="text-4xl">{currentFlag}</span>
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="w-16 bg-bento border border-border absolute top-0 mt-0 left-0 right-0 shadow-lg rounded-2xl overflow-hidden"
                        >
                            {sortedLocales.map((locale) => (
                                <li
                                    key={locale.code}
                                    onClick={() => handleLanguageChange(locale.code)}
                                    className="cursor-pointer p-2 h-[62px] flex items-center justify-center hover:bg-element transition"
                                >
                                    <span className="text-4xl">{locale.flag}</span>
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default FlagDropdown;