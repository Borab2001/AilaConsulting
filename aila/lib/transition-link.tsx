"use client";

import { Link } from '@/i18n/routing';
import { LinkProps } from "next/link";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from 'next-intl';

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
    onLinkClick?: () => void;
    onMouseOver?: () => void;
    onMouseLeave?: () => void;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({
    children,
    href,
    className,
    onLinkClick,
    onMouseOver,
    onMouseLeave,
    ...props
}) => {
    const router = useRouter();
    const pathname = usePathname(); // Get current path
    const locale = useLocale(); // Retrieve the current locale

    const handleTransition = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        
        if (onLinkClick) onLinkClick();

        // Construct the localized href
        const localizedHref = `/${locale}${href.startsWith("/") ? href : `/${href}`}`;

        if (pathname === localizedHref) {
            // If the current page is the same, force a page refresh
            document.body.style.transition = "opacity 0.5s ease-in-out";
            document.body.style.opacity = "0";

            setTimeout(() => {
                window.location.href = localizedHref; // Force reload the current page
            }, 500);
        } else {
            // Perform a regular transition
            document.body.style.transition = "opacity 0.5s ease-in-out";
            document.body.style.opacity = "0";

            setTimeout(() => {
                router.push(localizedHref);
                setTimeout(() => {
                    document.body.style.opacity = "1";
                }, 500);
            }, 500);
        }
    };

    return (
        <Link
            href={href}            
            {...props}
            locale={props.locale === false ? undefined : props.locale}
            onClick={handleTransition}
            className={className}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </Link>
    );
};

export default TransitionLink;
