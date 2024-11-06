"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TransitionLink from "@/lib/transition-link";
import { ServiceBeams } from "./components/service-beams";
import Portrait from "./components/ui/portrait";
import Header from "./components/header";
import Image from "next/image";
import MobileHeader from "./components/mobile-header";

export default function Home() {

	const socials = [
        {
            name: 'Facebook',
            href: '/facebook',
        },
        {
            name: 'Instagram',
            href: '/instagram',
        },
        {
            name: 'Phone',
            href: '/phone',
        },
        
    ];

	const gridVariants = {
		hidden: { opacity: 0, y: 0 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.3 + 2.8,
				duration: 0.6,
			},
		}),
	};

	return (
		<main className="flex flex-1 flex-grow h-full pt-16 md:pt-0">
		{/* <main className="flex flex-1 flex-grow h-full pt-20"> */}
				{/* <div className="flex-1 w-full md:h-[125vh] lg:h-auto grid grid-rows-18 grid-cols-1 md:grid-rows-10 md:grid-cols-8 lg:grid-rows-9 lg:grid-cols-12 gap-4">
				</div> */}
			{/* Bento Grid */}
			<div className='grid h-full min-h-[700px] grid-cols-12 grid-rows-10 gap-4 max-lg:h-auto max-lg:grid-rows-none'>

				<div className='col-span-full row-span-1'>
					<Header />
					<MobileHeader />
				</div>

				{/* Left column */}
				<div className="col-span-8 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
					
					{/* Grid Child 1 */}
					<motion.div 
						className="p-4 col-span-5 row-span-5 max-lg:col-span-8 max-md:col-span-full bg-gradient-gray rounded-2xl w-full flex flex-col justify-between gap-4"
						custom={0}
						initial="hidden"
						animate="visible"
						variants={gridVariants}
					>
						<div className="ml-auto size-[8rem]">
							<Image
								src="/next.svg"
								width={100}
								height={100}
								alt='flower'
								className='intro-icon size-full'
							/>						
						</div>
						<h2 className="text-3xl font-bold mb-4">
							Transform your international relocation into a breeze with our all-in-one solution.
						</h2>
					</motion.div>

					{/* Grid Child 2 */}
					{/* <motion.div 
						className="min-h-[480px] md:min-h-0 row-span-6 md:row-span-5 md:col-span-3 lg:row-span-5 lg:col-span-3 bg-istanbul bg-cover bg-center rounded-2xl w-full flex-grow"
						custom={1}
						initial="hidden"
						animate="visible"
						variants={gridVariants}	
					>
						<TransitionLink href="/about" className="p-4 h-full w-full flex justify-center items-center group group-hover:blur-md cursor-pointer">
							<div className="scale-0 w-20 h-20 bg-gradient-gray text-gridBlack flex justify-center items-center text-center text-balance rounded-full transition-all ease-in-out duration-500 group-hover:scale-100 ">
								<span>Learn More</span>
							</div>
						</TransitionLink>
					</motion.div> */}
					<div className="relative min-h-[480px] md:min-h-0 col-span-3 row-span-5 max-lg:col-span-4 max-md:col-span-full w-full flex-grow">
						<Portrait />
					</div>

					{/* Grid Child 4 */}
					<motion.div 
						className="p-4 col-span-4 row-span-4 min-h-[288px] max-lg:col-span-6 max-md:col-span-full bg-gradient-gray rounded-2xl w-full flex items-end"
						custom={3}
						initial="hidden"
						animate="visible"
						variants={gridVariants}	
					>
						<Image
							src="/next.svg"
							width={48}
							height={48}
							alt='flower'
							className='w-full h-full'
						/>	
						<span className="text-balance text-md lg:text-lg mb-4">
							We specialize in rapid visa approvals (student, work, family), offer certified translations in French, Turkish, and Russian, and provide seamless assistance for residence permit applications and renewals. Leave the complexities to us and focus on your global adventure.
						</span>
					</motion.div>

					{/* Grid Child 5 */}
					<motion.div 
						className="min-h-[288px] md:min-h-0 col-span-4 row-span-4 max-lg:col-span-6 max-md:col-span-full rounded-2xl w-full overflow-hidden"
						custom={4}
						initial="hidden"
						animate="visible"
						variants={gridVariants}
					>
						<TransitionLink href="/contact" className="p-4 w-full h-full flex flex-col justify-between bg-gridBlack group hover:bg-neutral-900 text-gridTextWhite transition ease-in-out duration-300">
							<div className="flex flex-row items-center justify-between">
								<span className="font-light">We would love to hear from you</span>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-10 transition-transform ease-in-out duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
									<path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
								</svg>
							</div>
							<h2 className="text-5xl font-bold mb-4">
								Contact Us
							</h2>
						</TransitionLink>
					</motion.div>
				</div>

				
				{/* Right column */}
				<div className="col-span-4 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
					
					{/* Grid Child 3 */}
					<motion.div 
						className="p-4 min-h-[400px] md:min-h-0 col-span-4 row-span-8 max-lg:col-span-full bg-gradient-gray rounded-2xl w-full flex flex-col justify-between"	
						custom={2}
						initial="hidden"
						animate="visible"
						variants={gridVariants}	
					>
						<div className="flex flex-col gap-2">
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
						</div>
						<ServiceBeams />
					</motion.div>

					{/* Grid Child 6 */}
					<motion.div 
						className="min-h-[100px] md:min-h-0 p-4 col-span-4 row-span-1 max-lg:col-span-full bg-gradient-gray rounded-2xl w-full flex items-center justify-center gap-10"
						custom={5}
						initial="hidden"
						animate="visible"
						variants={gridVariants}
					>
						{socials.map((social, index) => (
							<TransitionLink
								key={`social${index}`}	
								href={social.href} 
								className="uppercase font-light relative after:absolute after:bg-black after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
							>
								{social.name}
							</TransitionLink>
						))}
					</motion.div>
				</div>
			
			</div>
		</main>
	);
}
