import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, HardHat } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-amber-500 p-1.5 rounded-lg">
                                <HardHat className="text-white h-6 w-6" />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">
                                Tetouan<span className="text-amber-500">Build</span>
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Professional construction and renovation services providing quality, safety, and innovation for over 15 years.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-amber-500 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-amber-500 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-amber-500 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-amber-500 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="#services" className="hover:text-amber-500 transition-colors">Services</Link></li>
                            <li><Link href="#portfolio" className="hover:text-amber-500 transition-colors">Portfolio</Link></li>
                            <li><Link href="#about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
                            <li><Link href="#contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Residential Construction</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Commercial Renovation</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Interior Design</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Structural Repairs</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Consultation</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                                <span>123 Avenue Mohammed V, Tetouan, Morocco, 93000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-amber-500 flex-shrink-0" size={20} />
                                <span>+212 539 99 99 99</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-amber-500 flex-shrink-0" size={20} />
                                <span>info@tetouanbuild.ma</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} TetouanBuild. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
