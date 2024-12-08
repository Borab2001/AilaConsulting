"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FlagDropdownProps {
    locales: { code: string; flag: string }[];
    currentLocale: string;
    onLocaleChange: (locale: string) => void;
}

const FlagDropdown = ({ locales, currentLocale, onLocaleChange }: FlagDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    // Find the current flag
    const currentFlag = locales.find((locale) => locale.code === currentLocale)?.flag;

    // Reorder locales: currentLocale first, then others
    const sortedLocales = [
        ...locales.filter((locale) => locale.code === currentLocale),
        ...locales.filter((locale) => locale.code !== currentLocale),
    ];

    // Dropdown animation variants
    const dropdownVariants = {
        hidden: { opacity: 0, y: 0, x: 0 },
        visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: 0, x: 0, transition: { duration: 0.2 } },
    };

    return (
        <div className="absolute top-4 left-4">
            <div className="relative inline-block">
                {/* Trigger */}
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="p-2 bg-bento border border-border rounded-2xl w-16 h-16 m-0 bg-transparent focus:outline-none hover:bg-element"
                >
                    <span className="text-4xl w-9 h-10">{currentFlag}</span>
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="bg-bento border border-border absolute top-0 mt-0 left-0 right-0 shadow-lg rounded-2xl overflow-hidden"
                        >
                            {sortedLocales.map((locale) => (
                                <li
                                    key={locale.code}
                                    onClick={() => {
                                        onLocaleChange(locale.code);
                                        setIsOpen(false);
                                    }}
                                    className="cursor-pointer p-2 w-16 h-16 flex items-center justify-center hover:bg-element transition"
                                >
                                    <span className="text-4xl w-9 h-10 text-center">{locale.flag}</span>
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