'use client';

import Image from 'next/image';
import { Plus, ArrowDown, ArrowUp } from 'lucide-react';
import { useState } from 'react';

export default function Portfolio() {
    const [visibleCount, setVisibleCount] = useState(6);

    const projects = [
        {
            title: 'Villa Al-Andalus',
            category: 'Residential',
            image: '/villa.png'
        },
        {
            title: 'Tetouan Tech Hub',
            category: 'Commercial',
            image: '/tech-hub.png'
        },
        {
            title: 'Marina Complex',
            category: 'Renovation',
            image: '/marina.png'
        },
        {
            title: 'Royal Resort',
            category: 'Hospitality',
            image: '/resort.png'
        },
        {
            title: 'Green Valley Apartments',
            category: 'Residential',
            image: '/villa.png'
        },
        {
            title: 'City Center Mall',
            category: 'Commercial',
            image: '/hero.png'
        },
        // Additional projects for demonstration
        {
            title: 'Martil Seaside Hotel',
            category: 'Hospitality',
            image: '/marina.png'
        },
        {
            title: 'Fnideq Logistics Center',
            category: 'Industrial',
            image: '/tech-hub.png'
        },
        {
            title: 'Cabo Negro Private Villa',
            category: 'Residential',
            image: '/resort.png'
        }
    ];

    const handleToggle = () => {
        if (visibleCount < projects.length) {
            setVisibleCount(projects.length);
        } else {
            setVisibleCount(6);
            // Optional: Scroll back to top of portfolio section
            const section = document.getElementById('portfolio');
            section?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="portfolio" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-amber-500 font-semibold tracking-wider uppercase">Our Work</span>
                    <h2 className="mt-2 text-4xl font-bold text-gray-900">Featured Projects</h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        A showcase of our commitment to quality, innovation, and design excellence in Tetouan and the grand north.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, visibleCount).map((project, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer animate-in fade-in zoom-in duration-500">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                                <span className="text-amber-400 font-medium text-sm mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                    {project.title}
                                </h3>
                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                                    <Plus className="text-white w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={handleToggle}
                        className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all duration-300"
                    >
                        {visibleCount < projects.length ? (
                            <>
                                View More Projects <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                            </>
                        ) : (
                            <>
                                Show Less <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
}
