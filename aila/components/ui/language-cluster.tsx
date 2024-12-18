"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";

function Mark({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className={className}>
            <path fillRule="evenodd" d="M9 2.25a.75.75 0 0 1 .75.75v1.506a49.384 49.384 0 0 1 5.343.371.75.75 0 1 1-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 0 1-2.97 6.323c.318.384.65.753 1 1.107a.75.75 0 0 1-1.07 1.052A18.902 18.902 0 0 1 9 13.687a18.823 18.823 0 0 1-5.656 4.482.75.75 0 0 1-.688-1.333 17.323 17.323 0 0 0 5.396-4.353A18.72 18.72 0 0 1 5.89 8.598a.75.75 0 0 1 1.388-.568A17.21 17.21 0 0 0 9 11.224a17.168 17.168 0 0 0 2.391-5.165 48.04 48.04 0 0 0-8.298.307.75.75 0 0 1-.186-1.489 49.159 49.159 0 0 1 5.343-.371V3A.75.75 0 0 1 9 2.25ZM15.75 9a.75.75 0 0 1 .68.433l5.25 11.25a.75.75 0 1 1-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 0 1-1.36-.634l5.25-11.25A.75.75 0 0 1 15.75 9Zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726Z" clipRule="evenodd" />
        </svg>
    );
}

function Circle({
    size,
    delay,
    opacity,
}: {
    size: number;
    delay: number;
    opacity: string;
}) {
    return (
        <motion.div
            initial="idle"
            animate="active"
            variants={{
                idle: { width: `${size}px`, height: `${size}px` },
                active: {
                    width: [`${size}px`, `${size + 10}px`, `${size}px`],
                    height: [`${size}px`, `${size + 10}px`, `${size}px`],
                    transition: {
                        duration: 0.75,
                        repeat: Infinity,
                        repeatDelay: 1.25,
                        ease: "easeInOut",
                        delay,
                    },
                },
            }}
            style={{ "--opacity": opacity } as React.CSSProperties}
            className={clsx(
                "absolute left-1/2 top-[186px] -translate-x-1/2 -translate-y-1/2 rounded-full",
                "bg-[radial-gradient(circle,transparent_25%,color-mix(in_srgb,_theme(colors.element)_var(--opacity),transparent)_100%)]",
                "ring-1 ring-inset ring-element/[100%]",
            )}
        />
    );
}

function Circles() {
    return (
        <div className="absolute left-1/2 h-full w-[26rem] -translate-x-1/2">
            {/* <Circle size={491} opacity="100%" delay={0.45} /> */}
            <Circle size={367} opacity="100%" delay={0.3} />
            <Circle size={243} opacity="100%" delay={0.15} />
            <Circle size={119} opacity="100%" delay={0} />
        <div className="absolute inset-0 bg-gradient-to-t from-bento to-35%" />
        </div>
    );
}

function MainLanguage() {
    return (
        <div className="absolute left-44 top-[154px] flex size-16 items-center justify-center rounded-full bg-element shadow border border-border">
            <Mark className="flex items-center justify-center h-8 fill-[#ffffff]" />
        </div>
    );
}

function Language({
    flag,
    left,
    top,
    hover,
}: {
    flag: string;
    left: number;
    top: number;
    hover: { x: number; y: number; rotate: number; delay: number };
}) {
    return (
        <motion.span
            variants={{
                idle: { x: 0, y: 0, rotate: 0 },
                active: {
                    x: [0, hover.x, 0],
                    y: [0, hover.y, 0],
                    rotate: [0, hover.rotate, 0],
                    transition: {
                        duration: 0.75,
                        repeat: Infinity,
                        repeatDelay: 1.25,
                        ease: "easeInOut",
                        delay: hover.delay,
                    },
                },
            }}
            style={{ left, top } as React.CSSProperties}
            className="absolute size-16 flex items-center justify-center rounded-full bg-element shadow border border-border text-3xl"
        >
            {flag}
        </motion.span>
    );
}

export function LanguageCluster() {
    return (
        <div className="w-full h-full">
            <div aria-hidden="true" className="relative h-full overflow-hidden">
                <Circles />
                <div className="absolute left-1/2 h-full w-[26rem] -translate-x-1/2">
                    <MainLanguage />
                    <Language
                        flag="🇫🇷"
                        left={320}
                        top={144}
                        hover={{ x: 6, y: 1, rotate: 5, delay: 0.38 }}
                    />
                    <Language
                        flag="🇹🇷"
                        left={285}
                        top={20}
                        hover={{ x: 4, y: -5, rotate: 6, delay: 0.3 }}
                    />
                    <Language
                        flag="🇬🇷"
                        left={200}
                        top={280}
                        hover={{ x: 3, y: 5, rotate: 7, delay: 0.2 }}
                    />
                    <Language
                        flag="🇷🇺"
                        left={96}
                        top={44}
                        hover={{ x: -2, y: -5, rotate: -6, delay: 0.15 }}
                    />
                    <Language
                        flag="🏴󠁧󠁢󠁥󠁮󠁧󠁿"
                        left={40}
                        top={196}
                        hover={{ x: -4, y: -5, rotate: -6, delay: 0.35 }}
                    />
                    {/* <Language
                        flag="🇫🇷"
                        left={46}
                        top={176}
                        hover={{ x: -3, y: 5, rotate: 3, delay: 0.15 }}
                    /> */}
                </div>
            </div>
        </div>
    );
}
