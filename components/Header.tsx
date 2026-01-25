'use client';

import Link from 'next/link';
import { Menu, X, HardHat } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Why Us', href: '#why-us' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-amber-500 p-2 rounded-lg group-hover:bg-amber-400 transition-colors">
                                <HardHat className="text-white h-8 w-8" />
                            </div>
                            <span className="text-2xl font-bold text-gray-900 tracking-tight">
                                Tetouan<span className="text-amber-500">Build</span>
                            </span>
                        </Link>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:text-amber-500 font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex">
                        <Link
                            href="#contact"
                            className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Get a Quote
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-amber-500 p-2"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full transition-all duration-300 ease-in-out shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-amber-500 hover:bg-gray-50 rounded-lg"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Link
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center bg-amber-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-400 transition-colors shadow-md"
                            >
                                Get a Free Quote
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
