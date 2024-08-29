"use client";

import TransitionLink from "@/lib/transition-link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const MobileHeader = () => {

    const links = [
        {
            name: 'About',
            url: '/about',
        },
        {
            name: 'Contact',
            url: '/contact',
        },
        {
            name: 'Services',
            url: '/services',
        },
        
    ];

    const [isActive, setIsActive] = useState(false);

    return (
        <motion.header 
            className={`w-full sticky top-4 ${isActive ? "h-auto" : "h-auto"} bg-gray-50 p-4 rounded-2xl flex flex-col md:hidden`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}    
        >
            <div className="flex items-center justify-between">
                {/* <Image src="/aila.svg" width={300} height={300} alt={"Logo"} /> */}
                <TransitionLink href="/">
                    <Image src="/aila_bolder.svg" width={300} height={300} alt={"Logo"} />
                </TransitionLink>
                
                <p 
                    className="text-md text-black font-normal uppercase cursor-pointer"
                    onClick={() => setIsActive(!isActive)}      
                >
                    Menu
                </p>
            </div>
            
            <motion.nav 
                className="uppercase flex flex-col items-center justify-center space-y-8"
                initial={{ height: 0 }}
                animate={{ height: isActive ? "200px" : 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: isActive ? 0 : 0.2 }}
            >
                {links.map((link, index) => (
                    <TransitionLink 
                        href={link.url} 
                        key={`link${index}`}
                        className="relative after:absolute after:bg-black after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isActive ? 1 : 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut", delay: isActive ? 0.7 : 0 }}
                        >
                            {link.name}
                        </motion.span>
                    </TransitionLink>
                ))}
            </motion.nav>
            
        </motion.header>
    );
}
 
export default MobileHeader;