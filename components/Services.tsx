import { Home, Hammer, Building2, Ruler } from 'lucide-react';

export default function Services() {
    const services = [
        {
            title: 'Residential Construction',
            description: 'Building dream homes from the ground up with precision, quality materials, and personalized design to match your lifestyle.',
            icon: <Home className="w-12 h-12 text-amber-500 mb-4" />,
        },
        {
            title: 'Renovation & Remodeling',
            description: 'Transforming existing spaces into modern, functional environments. Kitchens, bathrooms, and complete home makeovers.',
            icon: <Hammer className="w-12 h-12 text-amber-500 mb-4" />,
        },
        {
            title: 'Commercial Construction',
            description: 'Reliable construction solutions for offices, retail spaces, and industrial facilities, delivered on time and within budget.',
            icon: <Building2 className="w-12 h-12 text-amber-500 mb-4" />,
        },
        {
            title: 'Structural Works',
            description: 'Expert structural engineering and concrete works ensuring safety, stability, and longevity for every project.',
            icon: <Ruler className="w-12 h-12 text-amber-500 mb-4" />,
        },
    ];

    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-amber-500 font-semibold tracking-wider uppercase">Our Expertise</span>
                    <h2 className="mt-2 text-4xl font-bold text-gray-900">Comprehensive Construction Services</h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        We deliver excellence across a wide range of construction disciplines, tailored to meet your unique needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
                        >
                            <div className="bg-amber-50 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                                <div className="group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
