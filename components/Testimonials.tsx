'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Ahmed Benali",
            role: "Homeowner",
            quote: "TetouanBuild transformed our vision into reality. The attention to detail in our villa renovation was outstanding. Highly recommended!",
            rating: 5
        },
        {
            name: "Sarah El Mansouri",
            role: "Business Owner",
            quote: "Professional, punctual, and transparent. They handled our office expansion with zero disruption to our operations. True partners.",
            rating: 5
        },
        {
            name: "Karim Tazi",
            role: "Real Estate Developer",
            quote: "I've worked with many contractors in the North, but TetouanBuild stands out for their structural expertise and high finishing standards.",
            rating: 5
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => {
        setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
    };

    const prev = () => {
        setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
    };

    return (
        <section id="testimonials" className="py-24 bg-gray-900 text-white overflow-hidden relative">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/3">
                        <span className="text-amber-500 font-bold tracking-wider uppercase mb-2 block">Testimonials</span>
                        <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
                        <p className="text-gray-400 text-lg mb-8">
                            We take pride in building lasting relationships. Here is what some of our valued clients have to say about working with us.
                        </p>
                        <div className="flex gap-4">
                            <button onClick={prev} className="p-3 rounded-full border border-gray-700 hover:bg-amber-500 hover:border-amber-500 hover:text-gray-900 transition-all">
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button onClick={next} className="p-3 rounded-full border border-gray-700 hover:bg-amber-500 hover:border-amber-500 hover:text-gray-900 transition-all">
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    <div className="md:w-2/3 w-full">
                        <div className="bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-700 relative">
                            <Quote className="absolute top-8 right-8 text-amber-500/20 w-16 h-16" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                                ))}
                            </div>

                            <blockquote className="text-2xl font-light leading-relaxed mb-8">
                                &quot;{testimonials[activeIndex].quote}&quot;
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center font-bold text-gray-900 text-xl">
                                    {testimonials[activeIndex].name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-lg">{testimonials[activeIndex].name}</div>
                                    <div className="text-amber-500 text-sm">{testimonials[activeIndex].role}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
