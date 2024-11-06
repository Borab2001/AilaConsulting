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
            src: "/images/1.jpg",
            alt: "About image"
        },
        {
            name: 'Contact',
            url: '/contact',
            src: "/images/2.jpg",
            alt: "Contact image"
        },
        {
            name: 'Services',
            url: '/services',
            src: "/images/3.jpg",
            alt: "Services image"
        },
        
    ];

    const currentYear = new Date().getFullYear();

    const [isActive, setIsActive] = useState(false);
    const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

    const handleLinkClick = () => {
        setIsActive(false);
    };

    return (
        <div className={`inset-0 fixed z-50 h-screen w-full transition-all duration-1000 ${isActive ? "bg-white/20 backdrop-blur-sm" : "bg-transparent backdrop-blur-none pointer-events-none"}`}>

            <motion.header 
                className={`w-header absolute top-4 left-4 pointer-events-auto bg-neutral-900 text-white p-4 rounded-2xl flex flex-col md:hidden transition-all duration-500 ease-in-out`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}    
            >
                <div className="py-1 h-full flex items-center justify-between">
                    {/* <Image src="/aila.svg" width={300} height={300} alt={"Logo"} /> */}
                    <TransitionLink 
                        href="/"
                        onLinkClick={handleLinkClick}
                    >
                        <Image src="/aila_bolder.svg" className="sm:w-[300px]" width={200} height={200} alt={"Logo"} />
                    </TransitionLink>
                    
                    <p 
                        className="text-md text-white font-normal uppercase cursor-pointer"
                        onClick={() => setIsActive(!isActive)}      
                    >
                        Menu
                    </p>
                </div>
                
                <motion.nav 
                    className="flex items-center"
                    animate={{ height: isActive ? "228px" : "0px" }}
                    initial={{ height: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: isActive ? 0 : 0.2 }}    
                >
                    <motion.div
                        className="w-full flex flex-row justify-between items-center"
                        animate={{ height: isActive ? "228px" : "0px", padding: isActive ? "32px 0 8px" : "0" }}
                        initial={{ height: 0, padding: 0 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: isActive ? 0 : 0.2 }}
                    >
                        <div className={`flex flex-col items-start justify-center space-y-8 ${isActive ? "w-full" : "w-auto"}`}>
                            <div className="uppercase flex flex-col items-start justify-center space-y-8">
                                {links.map((link, index) => (
                                    <TransitionLink 
                                        href={link.url}
                                        key={`link${index}`}
                                        className={`${isActive ? "pointer-events-auto" : "pointer-events-none"} relative after:absolute after:bg-white after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300`}
                                        onLinkClick={handleLinkClick}
                                        onMouseOver={() => setSelectedLink({isActive: true, index})}
                                        onMouseLeave={() => setSelectedLink({isActive: false, index})}
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
                            </div>
                            <motion.div  
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isActive ? 1 : 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut", delay: isActive ? 0.7 : 0 }}
                            >
                                <p className="w-full text-center text-sm text-neutral-400 font-light">
                                    <span className="uppercase text-neutral-600">Copyright: </span>
                                    &#169; Aila Consulting {currentYear}</p>
                            </motion.div>
                        </div>
                        <motion.div
                            className={`relative h-[188px] aspect-square rounded-md overflow-hidden hidden flex-shrink-0 flex-grow-0 pointer-events-none ${isActive ? "sm:block" : "sm:hidden"}`}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: isActive && selectedLink.isActive ? 1 : 0,
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            {links[selectedLink.index] && (
                                <Image
                                    src={links[selectedLink.index].src}
                                    fill
                                    alt={links[selectedLink.index].alt}
                                />
                            )}
                        </motion.div>
                    </motion.div>
                </motion.nav>
                
            </motion.header>
        </div>
    );
}
 
export default MobileHeader;