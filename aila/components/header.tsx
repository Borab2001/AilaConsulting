"use client";

import TransitionLink from "@/lib/transition-link";
import { motion } from "framer-motion";
import Image from "next/image";
import MobileHeader from "./mobile-header";

const Header = () => {

    // const links = [
    //     {
    //         name: 'About',
    //         url: '/about',
    //     },
    //     {
    //         name: 'Contact',
    //         url: '/contact',
    //     },
    //     {
    //         name: 'Services',
    //         url: '/services',
    //     },
        
    // ];

    return (
        <motion.header 
            className="w-full flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}    
        >
            {/* <Image src="/aila.svg" width={300} height={300} alt={"Logo"} /> */}
            <TransitionLink 
                href="/" 
                className="absolute top-4 left-4 z-30 w-[calc(100%-112px)] md:static md:w-full h-16 bg-bento border border-border p-4 rounded-2xl flex items-center justify-between"
            >
                <Image src="/logo.svg" width={300} height={300} alt={"Logo"} />
            </TransitionLink>
            
            <MobileHeader />
        </motion.header>
    );
}
 
export default Header;