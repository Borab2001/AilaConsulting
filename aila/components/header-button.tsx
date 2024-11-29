"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./navbar";

const HeaderButton = () => {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isActive]);

    return (
        <>
            <motion.div 
                className="fixed z-50 top-4 right-4 w-16 h-16 pointer-events-auto bg-bento border border-border text-title p-4 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out cursor-pointer hover:bg-element"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
                onClick={() => setIsActive(!isActive)}
            >
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#cccccc" className={`size-7 transition-all duration-800 ease-[cubic-bezier(0.76,0,0.24,1)] ${isActive ? "rotate-[225deg]" : "rotate-0"}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                </svg>
            </motion.div>
            <AnimatePresence mode="wait">
                {isActive && <Navbar />}
            </AnimatePresence>
        </>
    );
}
 
export default HeaderButton;