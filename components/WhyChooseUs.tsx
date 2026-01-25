import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
    const benefits = [
        "Over 15 years of industry experience in Tetouan",
        "Licensed, insured, and certified professionals",
        "Commitment to high-quality materials and finishes",
        "Transparent pricing with no hidden costs",
        "On-time project delivery guarantee"
    ];

    return (
        <section id="why-us" className="py-16 sm:py-20 lg:py-24 bg-amber-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="relative">
                        {/* Decorative pattern or image could go here, for now using a solid engaging block */}
                        <div className="bg-gray-900/10 p-6 sm:p-8 rounded-3xl backdrop-blur-sm border border-gray-900/10">
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Building Trust, One Project at a Time</h3>
                            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                                We understand that a construction project is a significant investment. That&apos;s why we prioritize clear communication, rigorous quality control, and a client-first approach in everything we do.
                            </p>
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                <div className="bg-white/80 p-3 sm:p-4 rounded-xl text-center">
                                    <span className="block text-3xl sm:text-4xl font-bold text-gray-900 mb-1">200+</span>
                                    <span className="text-xs sm:text-sm font-medium text-gray-700">Happy Clients</span>
                                </div>
                                <div className="bg-white/80 p-3 sm:p-4 rounded-xl text-center">
                                    <span className="block text-3xl sm:text-4xl font-bold text-gray-900 mb-1">50+</span>
                                    <span className="text-xs sm:text-sm font-medium text-gray-700">Skilled Pros</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="text-gray-800 font-bold tracking-wider uppercase mb-2 block">Why Choose Us</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">The TetouanBuild Advantage</h2>

                        <div className="space-y-4 sm:space-y-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3 sm:gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                                    </div>
                                    <p className="text-lg sm:text-xl font-medium text-gray-900">{benefit}</p>
                                </div>
                            ))}
                        </div>

                        <button className="mt-8 sm:mt-10 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto">
                            Schedule a Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
