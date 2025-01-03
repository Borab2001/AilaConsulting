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
			<div className="col-span-4 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
				<motion.div 
					className="p-4 min-h-[700px] lg:min-h-0 col-span-5 row-span-9 max-lg:col-span-8 max-md:col-span-full bg-bento border border-border text-title rounded-2xl w-full flex flex-col justify-between gap-4 relative overflow-hidden"
					custom={0}
					initial="hidden"
					animate="visible"
					variants={gridVariants}
				>
					<div className="flex-1 flex flex-col gap-4">
						<h1 className="text-3xl font-bold mb-2">
							{t('globeTitle')}
						</h1>
						<p>{t('globeDescription1')}</p>
						<p>{t('globeDescription2')}</p>
					</div>
					<div className="w-full h-[300px]">
						<div className="w-[500px] h-[500px] absolute z-10 -right-1/4 -bottom-1/4 flex">
							<Globe />
						</div>
					</div>
				</motion.div>
			</div>

			{/* Right column */}
			<div className="col-span-8 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
				<motion.div 
					className="p-4 min-h-[288px] col-span-8 row-span-4 max-lg:col-span-full max-md:col-span-full bg-bento border border-border text-title rounded-2xl w-full flex flex-col justify-between gap-4 relative overflow-hidden"
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
					className="p-4 min-h-[288px] col-span-8 row-span-5 max-lg:col-span-full max-md:col-span-full bg-bento border border-border text-title rounded-2xl w-full flex flex-col justify-between gap-4 relative overflow-hidden"
					custom={1}
					initial="hidden"
					animate="visible"
					variants={gridVariants}
				>
					<h2 className="text-3xl font-bold mb-4">
						{t('visaTitle')}
					</h2>
					<p>{t('visaDescription')}</p>
					<MarqueeList />
				</motion.div>
			</div>
		</BentoLayout>
    );
}
