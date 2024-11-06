import React, { useState, useEffect } from 'react';
import TransitionLink from '@/lib/transition-link';
import { motion } from "framer-motion";


const Portrait = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<motion.div 
			className="bg-istanbul bg-cover bg-center rounded-2xl"
			// custom={1}
			// initial="fixed inset-4 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20"
			initial={{ 
                position: "fixed", 
                top: "50%", 
                left: "50%",
				right: "auto",
				bottom: "auto",
                transform: "translate(-50%, -50%)",
				// minWidth: 300,
				// minHeight: 400,
            }}	
            animate={{ 
                position: "absolute", 
				top: "0",
                left: "0",
				right: "0",
				bottom: "0",
                transform: "translate(0, 0)", 
				width: "auto",
				height: "auto",
            }}
            transition={{ ease: "easeInOut", duration: 2, delay: 3 }}
		>
			<TransitionLink href="/about" className="p-4 h-full w-full flex justify-center items-center group group-hover:blur-md cursor-pointer">
				<div className="scale-0 w-20 h-20 bg-white text-neutral-900 flex justify-center items-center text-center text-balance rounded-full transition-all ease-in-out duration-500 group-hover:scale-100 ">
					<span>Learn More</span>
				</div>
			</TransitionLink>
		</motion.div>
	);
};

export default Portrait;