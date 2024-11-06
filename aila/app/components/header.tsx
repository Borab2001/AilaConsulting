"use client";

import TransitionLink from "@/lib/transition-link";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {

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

    return (
        <motion.header 
            // className="fixed top-4 z-10 w-header h-16 bg-gradient-gray p-4 rounded-2xl hidden md:flex items-center justify-between"
            className="w-full h-16 bg-bento border border-border p-4 rounded-2xl hidden md:flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}    
        >
            {/* <Image src="/aila.svg" width={300} height={300} alt={"Logo"} /> */}
            <TransitionLink href="/">
                <Image src="/aila_bolder.svg" width={300} height={300} alt={"Logo"} />
            </TransitionLink>

            <nav className="flex flex-row space-x-8 uppercase text-title">
                {links.map((link, index) => (
                    <TransitionLink 
                        href={link.url} 
                        key={`link${index}`}
                        className="relative after:absolute after:bg-title after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                    >
                        <span>
                            {link.name}
                        </span>
                    </TransitionLink>
                ))}
            </nav>
        </motion.header>
    );
}
 
export default Header;