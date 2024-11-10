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
            <div className="w-full pt-4 px-4 absolute top-0 flex md:hidden items-center bg-gradient-to-b from-background from-50% to-transparent">
                <motion.header 
                    className={`w-full pointer-events-auto bg-bento border border-border text-title p-4 rounded-2xl flex flex-col transition-all duration-500 ease-in-out`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}    
                >
                    <div className="h-full flex items-center justify-between">
                        {/* <Image src="/aila.svg" width={300} height={300} alt={"Logo"} /> */}
                        <TransitionLink 
                            href="/"
                            onLinkClick={handleLinkClick}
                        >
                            <Image src="/aila_bolder.svg" className="sm:w-[300px]" width={200} height={200} alt={"Logo"} />
                        </TransitionLink>
                        
                        <span 
                            className="text-md text-title font-normal uppercase cursor-pointer"
                            onClick={() => setIsActive(!isActive)}      
                        >
                            {/* Squares */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#cccccc" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                            </svg>

                            {/* Hamburger bars */}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#cccccc" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            </svg> */}
                        </span>
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
        </div>
    );
}
 
export default MobileHeader;