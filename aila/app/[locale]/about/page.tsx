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
          subtitle: 'Refining Visual Harmony',
          content:
            'Explore the principles of motion aesthetics that enhance the visual appeal of interfaces. Learn to balance timing, easing, and the flow of motion to create seamless user experiences.',
        },
        {
          name: 'Isabelle',
          surname: 'Bahar',
          image: Test,
          subtitle: 'Narrative and Expression',
          content:
            'Delve into how motion can be used as an artistic tool to tell stories and evoke emotions, making digital interactions feel more human and expressive.',
        },
        {
          name: 'Aila',
          surname: '',
          image: Test,
          subtitle: 'Mastering Motion Tools',
          content:
            'Gain proficiency in advanced techniques such as physics-based animations, 3D transformations, and complex sequencing to elevate your design skills and implementation.',
        },
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
                                
                                <h1 className='absolute h-auto bottom-0 left-0 text-5xl break-words p-4'>
                                    {item.name}
                                    <br/>
                                    {item.surname}
                                </h1>
                            </div>
                        ))}
                    </TransitionPanel>
                </motion.div>
            </div>
        </BentoLayout>
    );
}