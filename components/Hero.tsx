'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.png"
                    alt="Construction Site in Tetouan"
                    fill
                    className="object-cover"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 sm:mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 backdrop-blur-md mb-4 sm:mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
                        <span className="text-amber-400 font-medium text-xs sm:text-sm tracking-wide uppercase">Premier Construction Services</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
                        Building the Future of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                            Tetouan & Beyond
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 leading-relaxed font-light max-w-2xl">
                        From residential dreams to commercial landmarks, we deliver professional construction and renovation services with uncompromised quality.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-gray-900 bg-amber-500 rounded-full hover:bg-amber-400 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] group"
                        >
                            Request a Free Quote
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#portfolio"
                            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white border-2 border-white/20 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all hover:scale-105"
                        >
                            View Projects
                            <ChevronRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>

                    <div className="mt-10 sm:mt-12 md:mt-16 flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 text-white/80">
                        <div className="flex flex-col">
                            <span className="text-2xl sm:text-3xl font-bold text-white">15+</span>
                            <span className="text-xs sm:text-sm whitespace-nowrap">Years Experience</span>
                        </div>
                        <div className="w-px h-8 sm:h-10 bg-white/20"></div>
                        <div className="flex flex-col">
                            <span className="text-2xl sm:text-3xl font-bold text-white">200+</span>
                            <span className="text-xs sm:text-sm whitespace-nowrap">Projects Done</span>
                        </div>
                        <div className="w-px h-8 sm:h-10 bg-white/20"></div>
                        <div className="flex flex-col">
                            <span className="text-2xl sm:text-3xl font-bold text-white">100%</span>
                            <span className="text-xs sm:text-sm whitespace-nowrap">Client Satisfaction</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
