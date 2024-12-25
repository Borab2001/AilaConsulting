"use client";

import Globe from "@/components/ui/globe";
import { LanguageCluster } from "@/components/ui/language-cluster";
import BentoLayout, { gridVariants } from "@/components/bento-layout";

import { motion } from "framer-motion";
import React from "react";
import { useTranslations } from 'next-intl';
import { MarqueeList } from "@/components/ui/marquee-list";


export default function Services() {

	const t = useTranslations('ServicesPage');

    return (
		<BentoLayout gridVariants={gridVariants}>
			{/* Left column */}
			<div className="col-span-5 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
				<motion.div 
					className="p-4 min-h-[700px] lg:min-h-0 col-span-5 row-span-9 max-lg:col-span-8 max-md:col-span-full bg-bento border border-border text-title rounded-2xl w-full flex flex-col justify-between gap-4 relative overflow-hidden"
					custom={0}
					initial="hidden"
					animate="visible"
					variants={gridVariants}
				>
					<h1 className="text-3xl font-bold mb-4">
						{t('title')}
					</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cum, ratione nulla numquam et voluptate architecto, quia perspiciatis tenetur recusandae repudiandae asperiores rerum. Beatae dolore reiciendis consequuntur officia maxime laborum.</p>
					<div className="w-[500px] h-[500px] absolute z-10 -right-1/4 -bottom-1/4 flex">
						<Globe />
					</div>
				</motion.div>
			</div>

			{/* Right column */}
			<div className="col-span-7 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
				<motion.div 
					className="p-4 min-h-[288px] col-span-7 row-span-4 max-lg:col-span-full max-md:col-span-full bg-bento border border-border text-title rounded-2xl w-full flex flex-col justify-between gap-4 relative overflow-hidden"
					custom={1}
					initial="hidden"
					animate="visible"
					variants={gridVariants}
				>
					<h2 className="text-3xl font-bold mb-4">
						{t('translationTitle')}
					</h2>
					<LanguageCluster />
				</motion.div>

				<motion.div 
					className="p-4 min-h-[288px] col-span-7 row-span-5 max-lg:col-span-full max-md:col-span-full bg-bento border border-border text-title rounded-2xl w-full flex flex-col justify-between gap-4 relative overflow-hidden"
					custom={1}
					initial="hidden"
					animate="visible"
					variants={gridVariants}
				>
					<h2 className="text-3xl font-bold mb-4">
						{/* {t('')} */}
						Your visa faster than ever
					</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cum, ratione nulla numquam et voluptate architecto, quia perspiciatis tenetur recusandae repudiandae asperiores rerum. Beatae dolore reiciendis consequuntur officia maxime laborum.</p>
					<MarqueeList />
				</motion.div>
			</div>
		</BentoLayout>
    );
}
