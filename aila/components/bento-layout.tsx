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
        <main className="flex flex-1 flex-grow h-full px-4 pb-4 pt-20 lg:p-4">
            {/* Bento Grid */}
            <div className="grid h-auto flex-1 min-h-[700px] grid-cols-12 grid-rows-10 gap-4 max-lg:h-auto max-lg:grid-rows-none">
                <div className="col-span-full row-span-1">
                    <Header />
                </div>
                {children}
            </div>
        </main>
    );
}
 
export default BentoLayout;