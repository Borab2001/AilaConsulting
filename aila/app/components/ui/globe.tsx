"use client";

import React, { useRef, useEffect } from 'react';
import createGlobe from 'cobe';

export default function Globe() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            let phi = 0; // Initial rotation angle

            const globe = createGlobe(canvasRef.current, {
                devicePixelRatio: 2,
                width: 1000, // Adjust the width as needed
                height: 1000, // Adjust the height as needed
                phi: 0, // Starting rotation
                theta: 0.3, // Tilt angle
                dark: 1, // Background set to black
                diffuse: 1.35, // Diffuse lighting for softer appearance
                mapSamples: 28000, // Quality of the globe
                mapBrightness: 8, // Keep brightness neutral for transparency effect
                // baseColor: [1, 1, 1], // Black globe
                baseColor: [0.255, 0.255, 0.255], // #414141
                opacity: 0.85, // Lower opacity
                markerColor: [0.267, 0, 0.969], // #4400f7
                glowColor: [0.6, 0.6, 0.6], // #cccccc
                markers: [
                    { location: [41.0082, 28.9784], size: 0.08 } // Istanbul
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
        <canvas ref={canvasRef} width={1000} height={1000} />
    );
}
