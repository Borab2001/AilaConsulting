"use client";

import Globe from "../components/ui/globe";
import Header from "../components/header";
import MobileHeader from "../components/mobile-header";

import { motion } from "framer-motion";
import { ServiceBeams } from "../components/service-beams";


export default function Services() {

    const gridVariants = {
		hidden: { opacity: 0, y: 0 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.4 + 1,
				duration: 0.8,
			},
		}),
	};

    return (
        <main className="flex flex-1 flex-grow h-full pt-16 md:pt-0">

            {/* Bento Grid */}
            <div className='grid h-full min-h-[700px] grid-cols-12 grid-rows-10 gap-4 max-lg:h-auto max-lg:grid-rows-none'>
            
                <div className='col-span-full row-span-1'>
					<Header />
					<MobileHeader />
				</div>

                {/* Left column */}
				<div className="col-span-5 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
                    <motion.div 
						className="p-4 min-h-[288px] col-span-5 row-span-9 max-lg:col-span-8 max-md:col-span-full bg-bento border border-border text-title rounded-2xl w-full flex flex-col justify-between gap-4 relative overflow-hidden"
						custom={0}
						initial="hidden"
						animate="visible"
						variants={gridVariants}
					>
                        <h2 className="text-3xl font-bold mb-4">
							Transform your <i>international</i> relocation into a breeze with our <i>all-in-one</i> solution.
						</h2>
                        <div className="flex-1 w-auto h-auto flex items-center justify-center absolute -right-1/4 -bottom-1/4">
                            <Globe />
                        </div>
                    </motion.div>
                </div>

                {/* Right column */}
                <div className="col-span-7 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
                    <motion.div 
						className="p-4 min-h-[288px] col-span-7 row-span-5 max-lg:col-span-full max-md:col-span-full bg-bento border border-border text-title rounded-2xl w-full flex flex-col justify-between gap-4 relative overflow-hidden"
						custom={0}
						initial="hidden"
						animate="visible"
						variants={gridVariants}
					>
                        <h2 className="text-3xl font-bold mb-4">
							Translations in multiple languages.
						</h2>
                       <ServiceBeams />
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
