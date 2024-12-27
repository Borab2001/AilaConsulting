"use client";

import { ReactNode } from "react";
import Header from "./header";
import MobileHeader from "./header-button";

interface BentoLayoutProps {
    children: ReactNode;
    gridVariants: any;
};

export const gridVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.4 + 1,
            duration: 0.8,
        },
    }),
};


const BentoLayout: React.FC<BentoLayoutProps> = ({
    children,
    gridVariants
}) => {
    return (
        <main className="flex flex-1 flex-grow h-full p-4">
            {/* Bento Grid */}
            <div className="w-full flex flex-col min-h-[700px] gap-4">
                <div className="w-full h-16 flex-shrink-0">
                    <Header />
                </div>
                <div className="h-full grid flex-grow-1 grid-cols-12 grid-rows-9 gap-4 max-lg:h-auto max-lg:grid-rows-none">
                    {children}
                </div>
            </div>
        </main>
    );
}
 
export default BentoLayout;