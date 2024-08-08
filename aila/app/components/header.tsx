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
        <header className="w-full h-16 bg-gray-50 p-4 rounded-2xl flex items-center justify-between">
            <Image src="/aila.svg" width={280} height={280} alt={""} />

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
        </header>
    );
}
 
export default Header;