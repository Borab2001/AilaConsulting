import TransitionLink from "@/lib/transition-link";
import { motion } from "framer-motion";


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
    enter: (i: number) => ({
        x: "0px",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: i * 0.05},
    }),
    exit: (i: number) => ({
        x: "80px",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: i * 0.05},
    }),
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


    return (
        <motion.div 
            variants={menuSlide} 
            initial="initial"
            animate="enter"
            exit="exit"
            className="fixed z-40 top-0 right-0 max-w-[400px] w-full flex justify-center h-screen bg-bento border-l border-border"
        >
            <div className="h-full p-menu md:py-24 flex flex-col justify-between">
                <nav className="flex flex-col gap-8 mt-20 text-5xl text-primary capitalize">
                    <p className="w-full text-sm uppercase text-subtitle">Navigation</p>
                    {
                        links.map((link, index) => {
                            return (
                                <motion.div 
                                    key={index}
                                    custom={index}
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
                </nav>
                <div className="flex flex-col justify-between gap-4 w-full uppercase">
                    <p className="text-sm uppercase text-subtitle">Copyright</p>
                    <span className="text-sm text-title capitalize">
                        &#169;{currentYear} Aila Consulting 
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
 
export default Navbar;