import TransitionLink from "@/lib/transition-link";
import { useState } from "react";

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
        <div className="fixed z-40 top-0 right-0 h-screen bg-bento">
            {/* body */}
            <div className="p-24 flex justify-between">
                <nav className="flex flex-col gap-8 mt-20 text-5xl text-primary capitalize">
                    <p className="text-sm uppercase text-subtitle">Navigation</p>
                    {
                        links.map((link, index) => {
                            return <TransitionLink key={index} href={link.url}>{link.name}</TransitionLink>
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
        </div>
    );
}
 
export default Navbar;