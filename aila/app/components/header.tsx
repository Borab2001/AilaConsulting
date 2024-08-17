"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


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
            className="w-full h-16 bg-gray-50 p-4 rounded-2xl flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}    
        >
            {/* <Image src="/aila.svg" width={300} height={300} alt={"Logo"} /> */}
            <Link href="/">
                <Image src="/aila_bolder.svg" width={320} height={320} alt={"Logo"} />
            </Link>

            <nav className="flex flex-row space-x-8 uppercase">
                {links.map((link, index) => (
                    <Link 
                        href={link.url} 
                        key={`link${index}`}
                        className="relative after:absolute after:bg-black after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                    >
                        <span>
                            {link.name}
                        </span>
                    </Link>
                ))}
            </nav>
        </motion.header>
    );
}
 
export default Header;