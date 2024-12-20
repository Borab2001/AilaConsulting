import { AnimatePresence, motion } from 'framer-motion';
// import Image from 'next/image';

import { useEffect, useState } from 'react';
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

function useResponsiveDimensions() {
    const [dimensions, setDimensions] = useState({ height: 'auto', minHeight: '0' });

    useEffect(() => {
        const updateDimensions = () => {
            if (window.matchMedia('(min-width: 1024px)').matches) {
                // Large screens (lg and above)
                setDimensions({ height: '100%', minHeight: 'none' });
            } else if (window.matchMedia('(min-width: 768px)').matches) {
                // Medium screens (md and above)
                setDimensions({ height: '348px', minHeight: 'none' });
            } else {
                // Small screens
                setDimensions({ height: '100%', minHeight: 'none' });
            }
        };

        updateDimensions(); // Set initial dimensions
        window.addEventListener('resize', updateDimensions);

        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    return dimensions;
}

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
        <div className="relative flex flex-col h-full overflow-hidden md:justify-between">
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

    const { height, minHeight } = useResponsiveDimensions();

    return (
        <motion.div
            layout // Enables smooth height transitions
            className={`static overflow-hidden md:overflow-visible lg:overflow-hidden flex flex-col transition-all duration-500 pl-0 py-0 md:pl-2 md:py-2 lg:pl-0 lg:py-0
                ${
                    isSelected ? 'flex-grow md:flex-none lg:flex-grow pointer-events-none' : 'flex-none pointer-events-auto'
                }`
            }
        >    
            <motion.button
                onClick={onClick}
                className={`
                    relative group w-full md:w-max lg:w-full text-left cursor-pointer p-4 lg:hover:bg-element transition-colors duration-200 rounded-none md:rounded-xl lg:rounded-none
                    ${isSelected ? 'bg-transparent md:bg-element lg:bg-transparent' : ''    
                }`}
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
                {/* {
                    !isSelected && (
                        <div className='z-10 absolute top-4 right-2 w-8 h-8 hidden lg:flex opacity-0 group-hover:opacity-100 transition-all duration-200 items-center justify-center bg-elementBorder rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    )
                } */}
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
                        animate={{ 
                            opacity: 1, 
                            height, // Dynamic height
                            minHeight, // Dynamic minHeight
                            // : responsiveMinHeight,
                            transition: { duration: 0.5 } 
                        }}
                        exit={{ opacity: 0, height: 0, transition: { duration: 0.5 } }}
                        // exit={{ opacity: 0, height: 0 }}
                        // transition={{ duration: 0.5 }}
                        className="relative block w-full md:absolute md:z-10 md:top-0 md:bottom-0 md:right-0 md:left-1/2 lg:-inset-0 lg:z-0 lg:relative"
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