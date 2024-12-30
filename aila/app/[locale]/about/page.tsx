"use client";

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";

import BentoLayout, { gridVariants } from "@/components/bento-layout";
import Image from 'next/image';
import Istanbul from "@/public/images/istanbulv1.webp";

export default function About() {

    const t = useTranslations('AboutPage');

    return (
        <BentoLayout gridVariants={gridVariants}>
            <div className="col-span-4 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
                {/* <motion.div 
                    className="p-4 min-h-[700px] lg:min-h-0 col-span-5 row-span-9 max-lg:col-span-8 max-md:col-span-full bg-bento border border-border text-title rounded-2xl w-full flex flex-col justify-between gap-4 relative overflow-hidden"
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={gridVariants}
                >
                    
                </motion.div> */}
                <motion.div 
					className="relative min-h-[480px] md:min-h-0 col-span-5 row-span-9 max-lg:col-span-4 max-md:col-span-full rounded-2xl w-full flex-grow border border-border overflow-hidden"
					custom={1}
					initial="hidden"
					animate="visible"
					variants={gridVariants}	
				>
						<Image 
							src={Istanbul} 
							alt={t('grid2ImageAlt')} 
							priority
							fill
							sizes="100%"
							style={{ 
								objectFit: 'cover' 
							}}
							placeholder="blur"
						/>
						
                        <h1 className='absolute h-auto bottom-0 left-0 text-5xl break-words'>Name <span className='uppercase'>Surname</span></h1>
				</motion.div>
            </div>
        </BentoLayout>
    );
}
