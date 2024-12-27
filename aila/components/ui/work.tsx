import { AnimatePresence, motion } from 'framer-motion';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import WorkGlobe from './work-globe';
import { LanguageCluster } from './language-cluster';
import { MarqueeList } from './marquee-list';


interface Service {
    title: string;
    subtitle: string;
    component: React.ReactNode;
}

interface ProjectItemProps {
    project: Service;
    index: number;
    isLast: boolean;
    isSelected: boolean;
    onClick: () => void;
}

function useResponsiveDimensions() {
    const [dimensions, setDimensions] = useState({ height: 'auto'});

    useEffect(() => {
        const updateDimensions = () => {
            if (window.matchMedia('(min-width: 1024px)').matches) {
                // Large screens (lg and above)
                setDimensions({ height: '100%' });
            } else if (window.matchMedia('(min-width: 768px)').matches) {
                // Medium screens (md and above)
                setDimensions({ height: '348px' });
            } else {
                // Small screens
                setDimensions({ height: '100%' });
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
                component: <LanguageCluster />,
            },
            {
                title: t('grid3Title2'),
                subtitle: t('grid3Subtitle2'),
                component: <MarqueeList />,
            },
            {
                title: t('grid3Title3'),
                subtitle: t('grid3Subtitle3'),
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

    const { height } = useResponsiveDimensions();

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

            {/* Component */}
            <AnimatePresence>
                {isSelected && (
                    <motion.div
                        key="component"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                            opacity: 1, 
                            height, // Dynamic height
                            transition: { duration: 0.5 } 
                        }}
                        exit={{ opacity: 0, height: 0, transition: { duration: 0.5 } }}
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