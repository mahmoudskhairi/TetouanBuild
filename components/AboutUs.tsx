import Image from 'next/image';

export default function AboutUs() {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                        <Image
                            src="/about.png"
                            alt="TetouanBuild Team"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                        <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 text-white">
                            <p className="text-lg sm:text-xl font-bold">Building Trust Since 2008</p>
                        </div>
                    </div>

                    <div>
                        <span className="text-amber-500 font-bold tracking-wider uppercase mb-2 block">About Us</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">Building Dreams in Northern Morocco</h2>

                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            At TetouanBuild, we are more than just builders; we are partners in creating spaces that inspire. Founded with a vision to modernize construction in Tetouan while respecting local architectural heritage, we have grown into a leading construction firm in the region.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                            <div className="border-l-4 border-amber-500 pl-6">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h4>
                                <p className="text-gray-600">To deliver superior construction services with integrity, innovation, and unwavering commitment to quality.</p>
                            </div>
                            <div className="border-l-4 border-gray-900 pl-6">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Our Values</h4>
                                <p className="text-gray-600">Safety, Transparency, Excellence, and Community Focus drive every decision we make.</p>
                            </div>
                        </div>

                        <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                            <div className="flex items-center gap-4">
                                <div className="text-4xl font-bold text-amber-500">15+</div>
                                <div className="text-gray-700 font-medium">Years of Dedicated Service in the Construction Industry</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
