"use client";

import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
    onLinkClick?: () => void;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({
    children,
    href,
    className,
    onLinkClick,
    ...props
}) => {
    
    const router = useRouter();
    
    const handleTransition = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        if (onLinkClick) onLinkClick();
        document.body.style.transition = "opacity 0.5s ease-in-out";
        document.body.style.opacity = "0";

        setTimeout(() => {
            router.push(href);
            setTimeout(() => {
                document.body.style.opacity = "1";
            }, 500);
        }, 500);
    }

    return (
        <Link 
            href={href} 
            {...props}
            onClick={handleTransition}
            className={className}
        >
            {children}
        </Link>
    );
}

export default TransitionLink;