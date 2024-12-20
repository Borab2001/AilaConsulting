"use client";

import BentoLayout, { gridVariants } from "@/components/bento-layout";
import { LocationCard } from "@/components/ui/location-card";
import ContactForm from "@/components/contact-form";

import { motion } from "framer-motion";
import React from "react";
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { FaBluesky, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaThreads, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";


export default function Contact() {

    const t = useTranslations('ContactPage');

    const locationDetails = [
        {
            name: t('phone'),
            href: 'phone',
            icon: <HiOutlinePhone size={24} />
        },
        {
            name: t('address'),
            href: 'https://maps.app.goo.gl/ekRHmM1b74dUNg8RA',
            icon: <HiOutlineLocationMarker size={24} />
        },
        
    ];

    const socials = [
        {
            name: '@ailaconsulting',
            href: 'https://www.instagram.com/ailaconsulting/',
            icon: <FaInstagram size={24} />
        },
        {
            name: '@ailaconsulting',
            href: 'https://x.com/ailaconsulting',
            icon: <FaXTwitter size={24} />
        },
        {
            name: '@ailaconsulting',
            href: 'https://www.tiktok.com/@ailaconsulting',
            icon: <FaTiktok size={24} />
        },
        {
            name: '@ailaconsulting',
            href: 'https://bsky.app/profile/ailaconsulting.bsky.social',
            icon: <FaBluesky size={24} />
        },
        // {
        //     name: 'Threads',
        //     href: '/',
        //     icon: <FaThreads size={24} />
        // },
        //{
        //     name: 'LinkedIn',
        //     href: '/',
        //     icon: <FaLinkedinIn size={24} />
        // },
        // {
        //     name: 'Facebook',
        //     href: '/',
        //     icon: <FaFacebookF size={24} />
        // },
    ];

    return (
       <BentoLayout gridVariants={gridVariants}>
            {/* Left column */}
			<div className="col-span-8 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
				<motion.div 
					className="p-4 min-h-[700px] lg:min-h-0 col-span-8 row-span-9 max-lg:col-span-full bg-bento border border-border text-title rounded-2xl w-full flex flex-col justify-between gap-4 relative overflow-hidden"
					custom={0}
					initial="hidden"
					animate="visible"
					variants={gridVariants}
				>
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-4">
                            {t('contactTitle')}
                        </h1>
                        <span className="text-subtitle">
                            {t('contactSpan')}
                        </span>
                    </div>
                    <ContactForm t={t} />
				</motion.div>
			</div>

			{/* Right column */}
			<div className="col-span-4 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
				<motion.div 
					className="p-4 min-h-[288px] md:min-h-0 col-span-4 row-span-5 max-lg:col-span-full max-md:col-span-full bg-bento border border-border rounded-2xl w-full flex flex-col justify-between gap-4 relative overflow-hidden"
					custom={1}
					initial="hidden"
					animate="visible"
					variants={gridVariants}
				>
                    <div className="flex flex-col items-start">
                        <h2 className="text-title text-2xl font-semibold mb-8">
                            {t.rich('basedIn', {
                                italic: (chunks) => <i>{chunks}</i>
                            })}
                        </h2>
                        
                        <div className="flex flex-col gap-8">
                            {locationDetails.map((locationDetail, index) => (
                                <Link
                                    key={`social${index}`}	
                                    href={locationDetail.href}
                                    target="_blank"
                                >
                                    <div className="text-title flex flex-row gap-4 font-light">
                                        {locationDetail.icon}
                                        <span>
                                            {locationDetail.name}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* <div className="flex flex-row gap-2">
                        <HiOutlineLocationMarker size={24} />
                        <span>
                            Taksim
                        </span>
                    </div> */}
                    {/* Thumbnail */}
                    {/* <div className="relative block aspect-[4/3] w-full origin-top overflow-hidden rounded-2xl"
                    >
                        <Image
                            src="/images/taksim.webp"
                            alt="Taksim"
                            fill={true}
                            className="object-cover transition-transform duration-500 ease-in-out"
                            placeholder="blur"
                            blurDataURL={BLUR_DATA_URL}
                        />
                    </div> */}
                    <LocationCard t={t} />
				</motion.div>
                <motion.div 
					className="p-4 min-h-[288px] md:min-h-0 col-span-4 row-span-4 max-lg:col-span-full max-md:col-span-full bg-bento border border-border text-title rounded-2xl w-full flex flex-col justify-between gap-2 relative overflow-hidden"
					custom={2}
					initial="hidden"
					animate="visible"
					variants={gridVariants}
				>
					<h2 className="text-2xl font-semibold mb-8">
                        {t.rich('socials', {
                            italic: (chunks) => <i>{chunks}</i>
                        })}
					</h2>
                    <div className="flex flex-col gap-8">
                        {socials.map((social, index) => (
                            <Link
                                key={`social${index}`}	
                                href={social.href}
                                target="_blank"
                            >
                                <div className="text-title flex flex-row gap-4 font-light">
                                    {social.icon}
                                    <span>
                                        {social.name}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
				</motion.div>
			</div>
        </BentoLayout>
    );
}
