import { AnimatePresence, motion } from 'framer-motion';
// import Image from 'next/image';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
// import { WorkList } from './work-list';
import WorkGlobe from './work-globe';
import { LanguageCluster } from './language-cluster';
import { MarqueeList } from './marquee-list';


interface Service {
    title: string;
    subtitle: string;
    // image: string;
    component: React.ReactNode;
}

interface ProjectItemProps {
    project: Service;
    index: number;
    isLast: boolean;
    isSelected: boolean;
    onClick: () => void;
}

// const BLUR_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjCAvx/A8AA+oB81aCOA0AAAAASUVORK5CYII=';

// const headingVariants = {
//     hidden: { y: '100%' },
//     visible: {
//         y: 0,
//         transition: {
//             delay: 0.3,
//             staggerChildren: 0.18,
//         },
//     },
// };

// const thumbnailVariants = {
//     hidden: { opacity: 0, height: 0 },
//     visible: { opacity: 1, height: 'auto', transition: { duration: 0.5 } },
// };

// const borderVariants = {
//     hidden: { scaleX: 0 },
//     visible: {
//         scaleX: 1,
//         transition: {
//             delay: 0.3,
//             staggerChildren: 0.18,
//             ease: 'easeInOut',
//         },
//     },
// };

export default function Work() {

    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const t = useTranslations('HomePage');

    const services: Service[] = [
            {
                title: t('grid3Title1'),
                subtitle: t('grid3Subtitle1'),
                // image: '/images/1.jpg',
                component: <LanguageCluster />,
            },
            {
                title: t('grid3Title2'),
                subtitle: t('grid3Subtitle2'),
                // image: '/images/3.jpg',
                // component: <WorkList />,
                component: <MarqueeList />,
            },
            {
                title: t('grid3Title3'),
                subtitle: t('grid3Subtitle3'),
                // image: '/images/2.jpg',
                component: <WorkGlobe />,
            },
    ];

    return (
        <div className="flex flex-col h-full overflow-hidden">
                {services.map((service, index) => (
                    <ProjectItem
                        key={service.title}
                        project={service}
                        index={index}
                        isLast={index === services.length - 1}
                        isSelected={selectedIndex === index}
                        onClick={() => setSelectedIndex(index)}
                    />
                ))}
            {/* <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-8 w-full bg-gradient-to-b from-bento/0 to-bento/50"></div> */}
        </div>
    );
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, index, isLast, isSelected, onClick }) => {
    return (
        <motion.div
            layout // Enables smooth height transitions
            className={`overflow-hidden flex flex-col transition-all duration-500 ${
                isSelected ? 'flex-grow pointer-events-none' : 'flex-none pointer-events-auto'
            }`}
        >    
            <motion.button
                onClick={onClick}
                className="w-full text-left cursor-pointer p-4 hover:bg-element transition-colors duration-200"
            >
                <div className="flex flex-col w-full justify-between text-left">
                    
                    {/* Title & Subtitle */}
                    {/* <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={headingVariants}
                        className="overflow-hidden text-xl"
                    >
                        <motion.h2 className="pb-1 text-title">
                            {project.title}
                        </motion.h2>
                        <motion.span className="text-sm text-subtitle">{project.subtitle}</motion.span>
                    </motion.div> */}

                    {/* Uncomment div here if you don't include flex-col in the parent div above */}
                    {/* <div> */}
                    <motion.h2
                        layout
                        className="text-xl text-title pb-1"
                        transition={{ duration: 0.5 }}
                    >
                        {project.title}
                    </motion.h2>
                    <motion.span
                        layout
                        className="text-sm text-subtitle"
                        transition={{ duration: 0.5 }}
                    >
                        {project.subtitle}
                    </motion.span>
                    {/* </div> */}
                    
                </div>
            </motion.button>

                {/* Thumbnail */}
                {/* <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={thumbnailVariants}
                    className="relative block aspect-[3/2] w-full origin-top overflow-hidden rounded-[16px] bg-secondary my-2"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill={true}
                        className="object-cover transition-transform duration-500 ease-in-out"
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                    />
                </motion.div> */}

            {/* Component */}
            <AnimatePresence>
                {isSelected && (
                    <motion.div
                        key="component"
                        initial={{ opacity: 0, height: 0 }}
                        // animate={{ opacity: 1, height: 'auto' }}
                        animate={{ opacity: 1, height: '100%', transition: { duration: 0.5 } }}
                        exit={{ opacity: 0, height: 0, transition: { duration: 0.5 } }}
                        // exit={{ opacity: 0, height: 0 }}
                        // transition={{ duration: 0.5 }}
                        className="relative block w-full"
                    >
                        {project.component}
                    </motion.div>
                )}
            </AnimatePresence>

                {/* Border */}
                {/* {!isLast && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={borderVariants}
                        className="border border-neutral-300 absolute bottom-0 left-0 h-[0.5px] w-full origin-left bg-secondary"
                    />
                )} */}
            
        </motion.div>
    );
};