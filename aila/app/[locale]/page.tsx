"use client";

import { motion } from "framer-motion";
import TransitionLink from "@/lib/transition-link";
// import Link from "next/link";
import {useTranslations} from 'next-intl';
import { Link } from '@/i18n/routing';

import Work from "@/components/ui/work";
import BentoLayout, { gridVariants } from "@/components/bento-layout";

export default function Home() {

	const socials = [
        {
            name: 'X',
            href: 'https://x.com/ailaconsulting',
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/ailaconsulting/',
        },
        {
            name: 'TikTok',
            href: 'https://www.tiktok.com/@ailaconsulting',
        },
        
    ];

	const t = useTranslations('HomePage');

	return (
		<BentoLayout gridVariants={gridVariants}>
			{/* Left column */}
			<div className="col-span-8 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
				
				{/* Grid Child 1 */}
				<motion.div 
					className="p-4 min-h-[288px] col-span-5 row-span-5 max-lg:col-span-8 max-md:col-span-full bg-bento border border-border text-title rounded-2xl w-full flex flex-col justify-between gap-4"
					custom={0}
					initial="hidden"
					animate="visible"
					variants={gridVariants}
				>
					<div className="ml-auto">
						{/* Sparkles icon */}
						{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#cccccc" className="size-6">
							<path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
						</svg> */}

						{/* Globe icon */}
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#cccccc" className="size-12">
							<path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z" clipRule="evenodd" />
						</svg>
										
					</div>
					<h2 className="text-3xl font-bold mb-4">
						{t.rich('grid1Title', {
							italic: (chunks) => <i>{chunks}</i>
						})}
					</h2>
				</motion.div>

				{/* Grid Child 2 */}
				<motion.div 
					className="min-h-[480px] md:min-h-0 col-span-3 row-span-5 max-lg:col-span-4 max-md:col-span-full bg-istanbul bg-cover bg-center rounded-2xl w-full flex-grow"
					custom={1}
					initial="hidden"
					animate="visible"
					variants={gridVariants}	
				>
					<TransitionLink href="/about" className="p-4 h-full w-full flex justify-center items-center group group-hover:blur-md cursor-pointer">
						<div className="scale-0 w-20 h-20 bg-bento border border-border text-title flex justify-center items-center text-center text-balance rounded-full transition-all ease-in-out duration-500 group-hover:scale-100 ">
							<span>Learn More</span>
						</div>
					</TransitionLink>
				</motion.div>
				{/* <div className="relative min-h-[480px] md:min-h-0 col-span-3 row-span-5 max-lg:col-span-4 max-md:col-span-full w-full flex-grow">
					<Portrait />
				</div> */}

				{/* Grid Child 4 */}
				<motion.div 
					className="p-4 col-span-4 row-span-4 min-h-[288px] max-lg:col-span-6 max-md:col-span-full bg-bento border border-border text-text rounded-2xl w-full flex flex-col justify-between"
					custom={3}
					initial="hidden"
					animate="visible"
					variants={gridVariants}	
				>
					<div className="size-[2.75rem]">
						{/* <Image
							src="/next.svg"
							className='w-full h-full'
							width={48}
							height={48}
							alt='flower'
						/> */}
						
						{/* Badge icon */}
						{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" className="size-6">
							<path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
						</svg> */}

						{/* Sparkles icon */}
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" className="size-8">
							<path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
						</svg>

						{/* Globe icon */}
						{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" className="size-6">
							<path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z" clipRule="evenodd" />
						</svg> */}

					</div>
					<span className="text-balance text-md lg:text-lg mb-4">
						We specialize in rapid visa approvals, certified translations and seamless assistance for residence permit applications and renewals. Leave the complexities to us and focus on your global adventure.
					</span>
				</motion.div>

				{/* Grid Child 5 */}
				<motion.div 
					className="min-h-[288px] md:min-h-0 col-span-4 row-span-4 max-lg:col-span-6 max-md:col-span-full border border-border rounded-2xl w-full overflow-hidden"
					custom={4}
					initial="hidden"
					animate="visible"
					variants={gridVariants}
				>
					{/* <TransitionLink href="/contact" className="p-4 w-full h-full flex flex-col justify-between bg-primary group hover:bg-neutral-200 text-neutral-900 transition ease-in-out duration-300"> */}
					<TransitionLink
						href="/contact"
						className="relative p-4 w-full h-full flex flex-col justify-between bg-primary group hover:bg-element text-bento hover:text-title transition ease-in-out duration-300"
					>
						<div className="flex flex-row items-center justify-between relative z-10">
							<span className="font-light">We would love to hear from you</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="size-10 transition-transform ease-in-out duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"
							>
								<path
									fillRule="evenodd"
									d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<h2 className="text-5xl font-bold mb-4 relative z-10">Contact Us</h2>
					</TransitionLink>
				</motion.div>
			</div>

			
			{/* Right column */}
			<div className="col-span-4 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
				
				{/* Grid Child 3 */}
				<motion.div 
					className="p-4 min-h-[400px] md:min-h-0 col-span-4 row-span-8 max-lg:col-span-full bg-bento border border-border rounded-2xl w-full flex flex-col justify-between"	
					custom={2}
					initial="hidden"
					animate="visible"
					variants={gridVariants}	
				>
					{/* <div className="flex flex-col gap-2">
						<div className="flex flex-row items-center w-full space-x-4">
							<div className="bg-neutral-300 h-12 w-12 rounded-full flex-shrink-0 flex-grow-0"/>
							<div className="flex flex-col items-start justify-center">
								<h2 className="text-2xl font-bold mb-0">Visa Solutions</h2>
								<span className="">Fast-track your student, work, and family visas.</span>
							</div>
						</div>

						<div className="flex flex-row items-center w-full space-x-4">
							<div className="bg-neutral-300 h-12 w-12 rounded-full flex-shrink-0 flex-grow-0"/>
							<div className="flex flex-col items-start justify-center">
								<h2 className="text-2xl font-bold mb-0">Certified Translations</h2>
								<span className="">Certified translations between French, Turkish, and Russian.</span>
							</div>
						</div>

						<div className="flex flex-row items-center w-full space-x-4">
							<div className="bg-neutral-300 h-12 w-12 rounded-full flex-shrink-0 flex-grow-0"/>
							<div className="flex flex-col items-start justify-center">
								<h2 className="text-2xl font-bold mb-0">Residence Permit Assistance</h2>
								<span className="">Easy applications and renewals with expert support.</span>
							</div>
						</div>
					</div> */}
					<div className='col-span-4 row-span-8 max-lg:col-span-full'>
						<Work />
					</div>
					{/* <ServiceBeams /> */}
				</motion.div>

				{/* Grid Child 6 */}
				<motion.div 
					className="min-h-[100px] md:min-h-0 p-4 col-span-4 row-span-1 max-lg:col-span-full bg-bento border border-border text-title rounded-2xl w-full flex items-center justify-center gap-10"
					custom={5}
					initial="hidden"
					animate="visible"
					variants={gridVariants}
				>
					{socials.map((social, index) => (
						// <TransitionLink
						<Link
							key={`social${index}`}	
							href={social.href}
							target="_blank"
							className="uppercase font-light relative after:absolute after:bg-title after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
						>
							{social.name}
						</Link>
						// </TransitionLink>
					))}
				</motion.div>
			</div>
		</BentoLayout>
	);
}
