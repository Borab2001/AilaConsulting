"use client";

import React, { useRef, useEffect } from 'react';
import createGlobe from 'cobe';

export default function Services() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            let phi = 0; // Initial rotation angle

            const globe = createGlobe(canvasRef.current, {
                devicePixelRatio: 2,
                width: 600, // Adjust the width as needed
                height: 600, // Adjust the height as needed
                phi: 0, // Starting rotation
                theta: 0.3, // Tilt angle
                dark: 1, // Background set to black
                diffuse: 1.5, // Diffuse lighting for softer appearance
                mapSamples: 16000, // Quality of the globe
                mapBrightness: 1, // Keep brightness neutral for transparency effect
                baseColor: [1, 1, 1], // Black globe
                opacity: 0.85, // Lower opacity
                markerColor: [1, 1, 1], // White markers
                glowColor: [1, 1, 1], // White glow
                markers: [
                    { location: [37.7749, -122.4194], size: 0.03 }, // San Francisco
                    { location: [51.5074, -0.1278], size: 0.03 } // London
                ],
                onRender: (state) => {
                    state.phi = phi;
                    phi += 0.005; // Adjust rotation speed here if needed
                }
            });

            return () => globe.destroy(); // Cleanup when the component unmounts
        }
    }, []);

    return (
        <main className="flex flex-1 flex-grow h-full pt-20 justify-center items-center">
            <canvas ref={canvasRef} />
        </main>
    );
}
