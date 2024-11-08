"use client";

import BentoLayout, { gridVariants } from "../components/bento-layout";

import { motion } from "framer-motion";
import React from "react";


export default function Contact() {
    return (
       <BentoLayout gridVariants={gridVariants}>
            {/* Left column */}
			<div className="col-span-8 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
				<motion.div 
					className="p-4 min-h-[700px] lg:min-h-0 col-span-8 row-span-9 max-lg:col-span-8 max-md:col-span-full bg-bento border border-border text-title rounded-2xl w-full flex flex-col justify-between gap-4 relative overflow-hidden"
					custom={0}
					initial="hidden"
					animate="visible"
					variants={gridVariants}
				>
                    <div>
                        <h1 className="text-3xl font-bold mb-4">
                            Chat to our experts
                        </h1>
                        <span className="text-subtitle">
                            Need help with something? Need some info? Get in touch with our team.
                        </span>
                    </div>
				</motion.div>
			</div>

			{/* Right column */}
			<div className="col-span-4 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
				<motion.div 
					className="p-4 min-h-[288px] col-span-4 row-span-5 max-lg:col-span-full max-md:col-span-full bg-bento border border-border text-title rounded-2xl w-full flex flex-col justify-between gap-4 relative overflow-hidden"
					custom={0}
					initial="hidden"
					animate="visible"
					variants={gridVariants}
				>
					<h2 className="text-2xl font-semibold mb-4">
						Based in <i>Istanbul</i>
					</h2>
				</motion.div>
                <motion.div 
					className="p-4 min-h-[288px] col-span-4 row-span-4 max-lg:col-span-full max-md:col-span-full bg-bento border border-border text-title rounded-2xl w-full flex flex-col justify-between gap-4 relative overflow-hidden"
					custom={0}
					initial="hidden"
					animate="visible"
					variants={gridVariants}
				>
					<h2 className="text-2xl font-semibold mb-4">
						Our <i>Socials</i>
					</h2>
                    <div className="flex flex-col">
                        
                    </div>
				</motion.div>
			</div>
        </BentoLayout>
    );
}
