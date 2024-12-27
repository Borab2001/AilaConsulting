"use client";

import TransitionLink from "@/lib/transition-link";
import { motion } from "framer-motion";

import MobileHeader from "./header-button";
import Image from "next/image";
import Logo from "@/public/logo.svg";

const Header = () => {

    return (
        <motion.header 
            className="w-full h-full flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}    
        >
            <div className="absolute top-4 left-4 z-30 w-[calc(100%-112px)] h-16 bg-bento border border-border p-4 rounded-2xl flex items-center">
                <TransitionLink 
                    href="/" 
                    className="w-fit"
                    as={'image'}
                >
                    <Image 
                        src={Logo}
                        alt="Aila Logo" 
                        priority
                        style={{
                            width: "100%",
                            maxWidth: "300px",
                            height: "auto",
                            objectFit: "contain"
                        }}
                    />
                </TransitionLink>
            </div>
            
            <MobileHeader />
        </motion.header>
    );
}
 
export default Header;