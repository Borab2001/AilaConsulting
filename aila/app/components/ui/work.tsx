import { motion, useAnimation } from 'framer-motion';
import { easeInOut } from 'framer-motion/dom';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Service {
    title: string;
    subtitle: string;
    image: string;
}

interface ProjectItemProps {
    project: Service;
    index: number;
    isLast: boolean;
    isSelected: boolean;
    onClick: () => void;
}

const BLUR_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjCAvx/A8AA+oB81aCOA0AAAAASUVORK5CYII=';

const headingVariants = {
  hidden: { y: '100%' },
  visible: {
    y: 0,
    transition: {
      delay: 0.3,
      staggerChildren: 0.18,
    },
  },
};

// Set thumbnail animation without delay for simultaneous effect
const thumbnailVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.5 } },
};

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

  const services: Service[] = [
        {
            title: 'Visa Solutions',
            subtitle: 'Fast-track your student, work, and family visas.',
            image: '/images/1.jpg',
        },
        {
            title: 'Certified Translations',
            subtitle: 'Certified translations in French, Turkish & Russian.',
            image: '/images/2.jpg',
        },
        {
            title: 'Residence Permit',
            subtitle: 'Easy applications and renewals with expert support.',
            image: '/images/3.jpg',
        },
  ];

    return (
        <div className="relative z-10 size-full overflow-hidden">
            <div className="hide-scrollbar flex h-full flex-col overflow-y-auto max-lg:overflow-y-visible">
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
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-8 w-full bg-gradient-to-b from-primary/0 to-primary/50"></div>
        </div>
    );
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, index, isLast, isSelected, onClick }) => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start(isSelected ? 'visible' : 'hidden');
    }, [isSelected, controls]);

    return (
        <motion.button
            onClick={onClick}
            className={`relative py-2 ${isSelected ? 'pointer-events-none' : 'pointer-events-auto'}`}
        >
            <div className="flex w-full justify-between text-left">
                
                {/* Title */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={headingVariants}
                    className="overflow-hidden text-xl"
                >
                    <motion.h2 className="pb-1">
                        {project.title}
                    </motion.h2>
                    <motion.span className="text-sm text-neutral-500">{project.subtitle}</motion.span>
                </motion.div>
            </div>

            {/* Thumbnail */}
            <motion.div
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
            </motion.div>

            {/* Border */}
            {/* {!isLast && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={borderVariants}
                    className="border border-neutral-300 absolute bottom-0 left-0 h-[0.5px] w-full origin-left bg-secondary"
                />
            )} */}
        </motion.button>
    );
};