import TransitionLink from "@/lib/transition-link";

import { motion } from "framer-motion";
import { useState } from "react";


export const menuSlide = {
    initial: {
        x: "100%",
    },
    enter: {
        x: "0%",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]},
    },
    exit: {
        x: "100%",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]},
    },
};

export const slide = {
    initial: {
        x: "80px",
    },
    enter: {
        x: "0px",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]},
    },
    exit: {
        x: "80px",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]},
    },
};

const Navbar = () => {

    const links = [
        {
            name: 'Home',
            url: '/',
        },
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
    

    const currentYear = new Date().getFullYear();

    const [isActive, setIsActive] = useState(false);

    const handleLinkClick = () => {
        setIsActive(false);
    };

    return (
        // menu
        <motion.div 
            variants={menuSlide} 
            initial="initial"
            animate="enter"
            exit="exit"
            className="fixed z-40 top-0 right-0 h-screen bg-bento"
        >
            {/* body */}
            <div className="p-24 flex justify-between">
                <nav className="flex flex-col gap-8 mt-20 text-5xl text-primary capitalize">
                    <p className="text-sm uppercase text-subtitle">Navigation</p>
                    {
                        links.map((link, index) => {
                            return (
                                <motion.div 
                                    key={index} 
                                    variants={slide} 
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                >
                                    <TransitionLink href={link.url}>
                                        {link.name}
                                    </TransitionLink>
                                </motion.div>
                            )
                        })
                    }
                     <p className="w-full uppercase text-md text-neutral-400 font-light">
                        <p className="text-sm uppercase text-subtitle">Copyright</p>
                        <span className="text-sm text-title capitalize">
                            &#169;{currentYear} Aila Consulting 
                        </span>
                    </p>
                </nav>
            </div>
        </motion.div>
    );
}
 
export default Navbar;