"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "./navbar";

const HeaderButton = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        // <div className={`inset-0 fixed z-50 h-screen w-full transition-all ease-in-out duration-500 ${isActive ? "bg-black/50 backdrop-blur-sm" : "bg-transparent backdrop-blur-none pointer-events-none"}`}>
        //     <div className="w-full pt-4 px-4 absolute top-0 flex md:hidden items-center bg-gradient-to-b from-background from-50% to-transparent">
        //         <motion.header 
        //             className={`w-full pointer-events-auto bg-bento border border-border text-title p-4 rounded-2xl flex flex-col transition-all duration-500 ease-in-out`}
        //             initial={{ opacity: 0 }}
        //             animate={{ opacity: 1 }}
        //             transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}    
        //         >
        //             <div className="h-full flex items-center justify-between">
        //                 <TransitionLink 
        //                     href="/"
        //                     onLinkClick={handleLinkClick}
        //                 >
        //                     <Image src="/logo.svg" className="sm:w-[300px]" width={200} height={200} alt={"Logo"} />
        //                 </TransitionLink>
                        
        //                 <span 
        //                     className="text-md text-title font-normal uppercase cursor-pointer"
        //                     onClick={() => setIsActive(!isActive)}      
        //                 >
        //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#cccccc" className="size-6">
        //                         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
        //                     </svg>
        //                 </span>
        //             </div>
                    
        //             <motion.nav 
        //                 className="flex items-center"
        //                 animate={{ height: isActive ? "320px" : "0px" }}
        //                 initial={{ height: 0 }}
        //                 transition={{ duration: 0.5, ease: "easeInOut", delay: isActive ? 0 : 0.2 }}    
        //             >
        //                 <motion.div
        //                     className="w-full flex flex-row justify-between items-center"
        //                     animate={{ height: isActive ? "320px" : "0px", padding: isActive ? "32px 0 0" : "0" }}
        //                     initial={{ height: 0, padding: 0 }}
        //                     transition={{ duration: 0.5, ease: "easeInOut", delay: isActive ? 0 : 0.2 }}
        //                 >
        //                     <div className={`flex flex-col h-full items-center justify-center space-y-8 ${isActive ? "w-full pointer-events-auto" : "w-full pointer-events-none"}`}>
        //                         <div className="uppercase flex flex-col flex-1 items-center justify-center space-y-8">
        //                             {links.map((link, index) => (
        //                                 <TransitionLink 
        //                                     href={link.url}
        //                                     key={`link${index}`}
        //                                     className={`${isActive ? "pointer-events-auto" : "pointer-events-none"} relative after:absolute after:bg-white after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300`}
        //                                     onLinkClick={handleLinkClick}
        //                                 >
        //                                     <motion.span
        //                                         initial={{ opacity: 0 }}
        //                                         animate={{ opacity: isActive ? 1 : 0 }}
        //                                         transition={{ duration: 0.5, ease: "easeInOut", delay: isActive ? 0.2 : 0 }}
        //                                         className="text-3xl"
        //                                     >
        //                                         {link.name}
        //                                     </motion.span>
        //                                 </TransitionLink>
        //                             ))}
        //                         </div>
        //                         <motion.div  
        //                             initial={{ opacity: 0 }}
        //                             animate={{ opacity: isActive ? 1 : 0 }}
        //                             transition={{ duration: 0.5, ease: "easeInOut", delay: isActive ? 0.2 : 0 }}
        //                         >
        //                             <p className="w-full text-center text-sm text-neutral-400 font-light">
        //                                 <span className="uppercase text-neutral-600">Copyright: </span>
        //                                 &#169; Aila Consulting {currentYear}</p>
        //                         </motion.div>
        //                     </div>
        //                 </motion.div>
        //             </motion.nav>
                    
        //         </motion.header>
        //     </div>
        // </div>
        <>
            <motion.div 
                className="fixed z-50 top-4 right-4 md:static w-16 h-16 pointer-events-auto bg-bento border border-border text-title p-4 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
                onClick={() => setIsActive(!isActive)}
            >
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#cccccc" className={`size-7 transition-all duration-500 ease-in-out ${isActive ? "rotate-[225deg]" : "rotate-0"}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                </svg>
            </motion.div>
            {isActive && <Navbar />}
        </>
    );
}
 
export default HeaderButton;