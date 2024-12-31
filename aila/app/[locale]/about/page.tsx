"use client";

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";

import BentoLayout, { gridVariants } from "@/components/bento-layout";
import Image from 'next/image';
import Test from "@/public/images/test.jpg";
import { useState } from 'react';
import { TransitionPanel } from '@/components/ui/transition-panel';

export default function About() {

    const t = useTranslations('AboutPage');
    const [activeIndex, setActiveIndex] = useState(0);

    const abouts = [
        {
            name: 'Alain',
            surname: 'Peksoyler',
            image: Test,
            title: 'Co-Founder of Aila',
            subtitle: 'Refining Visual Harmony',
            content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
        },
        {
            name: 'Isabelle',
            surname: 'Bahar',
            title: 'Co-Founder of Aila',
            image: Test,
            subtitle: 'Narrative and Expression',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
        },
        // {
        //     name: 'Aila',
        //     surname: '',
        //     title: '',
        //     image: Test,
        //     subtitle: 'Mastering Motion Tools',
        //     content:
        //         'Gain proficiency in advanced techniques such as physics-based animations, 3D transformations, and complex sequencing to elevate your design skills and implementation.',
        // },
      ];

    return (
        <BentoLayout gridVariants={gridVariants}>
            <div className="col-span-4 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
                <motion.div 
                    className="relative min-h-[480px] md:min-h-0 col-span-5 row-span-9 max-lg:col-span-4 max-md:col-span-full rounded-2xl w-full flex-grow border border-border overflow-hidden"
                    custom={0}
                    
                    initial="hidden"
                    animate="visible"
                    variants={gridVariants}	
                >
                    <div className='absolute z-10 flex flex-row gap-2 bg-bento p-4 rounded-br-3xl'>
                        {abouts.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`rounded-md px-3 py-1 text-sm font-medium ${
                                activeIndex === index
                                    ? ' bg-primary text-black'
                                    : ' bg-element text-text'
                                }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    <TransitionPanel
                        activeIndex={activeIndex}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        variants={{
                            enter: { opacity: 1, x: "-100%", filter: 'blur(0px)' },
                            center: { opacity: 1, x: 0, filter: 'blur(0px)' },
                            exit: { opacity: 1, x: "100%", filter: 'blur(0px)' },
                        }}
                        className='h-full w-full'
                    >
                        {abouts.map((item, index) => (
                            <div key={index} className='h-full w-full'>
                                <Image 
                                    src={item.image}
                                    alt={t('grid2ImageAlt')} 
                                    priority
                                    fill
                                    sizes="100%"
                                    style={{ 
                                        objectFit: 'cover' 
                                    }}
                                    placeholder="blur"
                                />
                                
                                <h1 className='absolute h-auto bottom-0 left-0 text-5xl break-words p-4 font-semibold italic leading-tight'>
                                    {item.name}
                                    {/* <br/>
                                    <span className='uppercase'>
                                        {item.surname}
                                    </span> */}
                                </h1>
                            </div>
                        ))}
                    </TransitionPanel>
                </motion.div>
            </div>

            <div className="col-span-8 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
                <motion.div 
                    className="p-4 min-h-[288px] col-span-8 row-span-4 max-lg:col-span-full max-md:col-span-full bg-bento border border-border text-title rounded-2xl w-full flex flex-col justify-between gap-4 relative overflow-hidden"
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={gridVariants}
                >
                    <TransitionPanel
                        activeIndex={activeIndex}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        variants={{
                            enter: { opacity: 1, x: "-100%", filter: 'blur(0px)' },
                            center: { opacity: 1, x: 0, filter: 'blur(0px)' },
                            exit: { opacity: 1, x: "100%", filter: 'blur(0px)' },
                        }}
                        className='h-full w-full'
                    >
                        {abouts.map((item, index) => (
                            <div key={index} className='h-full w-full'>
                                <h2 className="text-primary text-3xl font-semibold mb-2">
                                    {item.name} {item.surname}
                                </h2>
                                <h3 className='text-subtitle text-lg font-medium mb-4 italic'>
                                   {item.title} 
                                </h3>
                                <p className='text-text text-base'>
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </TransitionPanel>
                </motion.div>
            </div>
        </BentoLayout>
    );
}