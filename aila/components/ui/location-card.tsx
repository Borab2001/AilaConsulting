"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/outside-click";

import Image from "next/image";
import { FaPlus, FaX } from "react-icons/fa6";

interface LocationCardProps {
  t: (key: string) => string;
}

export function LocationCard({ t }: LocationCardProps) {

	const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
		null
	);
	const ref = useRef<HTMLDivElement>(null);
	const id = useId();
    const BLUR_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjCAvx/A8AA+oB81aCOA0AAAAASUVORK5CYII=';

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setActive(false);
			}
		}

		if (active && typeof active === "object") {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [active]);

 	useOutsideClick(ref, () => setActive(null));

	const cards = [
		{
			title: t('locationTitle'),
			subtitle: t('locationSubtitle'),
			src: "/images/taksim.webp",
			open: <FaPlus size={16} />,
			content: () => {
				return (
					<p>
						{t('locationDetails')}
					</p>
				);
			},
		},
	];
	
	return (
		<>
			<AnimatePresence>
				{active && typeof active === "object" && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-background/20 h-full w-full z-10"
					/>
				)}
			</AnimatePresence>
		
			<AnimatePresence>
				{active && typeof active === "object" ? (
					<div className="fixed inset-0 grid place-items-center z-[100] p-4 md:p-0">
						<motion.div
							layoutId={`card-${active.title}-${id}`}
							ref={ref}
							className="w-full max-w-[500px] h-fit md:max-h-[90%] flex flex-col bg-border rounded-3xl overflow-hidden"
						>
							<motion.div layoutId={`image-${active.title}-${id}`}>
								<Image
									priority
									width={500}
									height={500}
									src={active.src}
									alt={active.title}
									className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
									placeholder="blur"
                            		blurDataURL={BLUR_DATA_URL}
								/>
							</motion.div>

							<div>
								<div className="flex justify-between items-start p-4">
									<div className="">
										<motion.h3
											layoutId={`title-${active.title}-${id}`}
											className="font-semibold text-title"
										>
											{active.title}
										</motion.h3>
										
										<motion.p
											layoutId={`subtitle-${active.subtitle}-${id}`}
											className="text-subtitle"
										>
											{active.subtitle}
										</motion.p>
									</div>

									<motion.button
										layoutId={`button-${active.title}-${id}`}
										onClick={() => setActive(null)}
										className="h-10 w-10 flex flex-grow-0 flex-shrink-0 items-center justify-center text-sm rounded-full font-bold bg-primary text-background rotate-45"
										initial={{ rotate: 0 }}
										animate={{ rotate: 45 }}
									>
										{active.open}
									</motion.button>
								</div>
								
								<div className="md:pt-4 relative px-4">
									<motion.div
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										// className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,primary,primary,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
										className="text-text text-sm lg:text-base h-fit pb-4 flex flex-col items-start gap-4 overflow-hidden"
									>
										{typeof active.content === "function"
										? active.content()
										: active.content}
									</motion.div>
								</div>
							</div>
						</motion.div>
					</div>
				) : null}
			</AnimatePresence>

			<div className="w-full gap-4">
				{cards.map((card, index) => (
					<motion.div
						layoutId={`card-${card.title}-${id}`}
						key={`card-${card.title}-${id}`}
						onClick={() => setActive(card)}
						className="p-2 flex flex-row justify-between items-center hover:bg-element rounded-xl cursor-pointer"
					>
						<div className="w-full flex gap-4 flex-row ">
							<motion.div layoutId={`image-${card.title}-${id}`}>
								<Image
									width={300}
									height={300}
									src={card.src}
									alt={card.title}
									className="h-14 w-14 sm:h-24 sm:w-24 lg:h-20 lg:w-20 rounded-lg object-cover object-top"
									placeholder="blur"
                            		blurDataURL={BLUR_DATA_URL}
								/>
							</motion.div>
							<div className="flex flex-col justify-center items-start">
								<motion.h3
									layoutId={`title-${card.title}-${id}`}
									className="truncate font-medium text-title"
								>
									{card.title}
								</motion.h3>
								
								<motion.p
									layoutId={`subtitle-${card.subtitle}-${id}`}
									className="text-subtitle text-md"
								>
									{card.subtitle}
								</motion.p>
							</div>
						</div>
						
						<motion.button
							layoutId={`button-${card.title}-${id}`}
							className="h-10 w-10 flex flex-grow-0 flex-shrink-0 items-center justify-center text-sm rounded-full font-bold bg-primary text-background"
						>
							{card.open}
						</motion.button>
					</motion.div>
				))}
			</div>
		</>
	);
}