import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


export default function HeroSection() {
    const ref = useRef(null);

    // Scroll progress dari section
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Parallax effect - gerakkan background lebih lambat saat scroll
    const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

    return (
        <section
            ref={ref}
            className="min-h-screen bg-gradient-to-b from-lime-600 via-lime-700 to-lime-900 flex items-center justify-center relative overflow-hidden"
        >
            {/* Gambar background parallax */}
            <motion.img
                src="/build/images/forest.png"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ y }}
            />

            {/* Gambar karakter animasi naik-turun */}
            <motion.img
                src="/build/images/gambi-hero.png"
                alt="gambi-hero.png"
                className="w-1/2 relative z-10"
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </section>
    );
}
