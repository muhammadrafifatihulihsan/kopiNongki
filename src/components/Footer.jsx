import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
    const SOCIAL_LINK = "https://www.linkedin.com/in/muhammad-rafi-fatihul-ihsan-mrfi/";

    return (
        <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold text-coffee-dark mb-4 flex items-center gap-2">
                            KopiNongki.id
                        </h3>
                        <p className="text-coffee-body text-sm leading-relaxed mb-6">
                            Tempat nongkrikin kenangan, satu cangkir pada satu waktu. Menghadirkan kopi terbaik dengan suasana yang tak terlupakan.
                        </p>
                        <div className="flex gap-4">
                            <a href={SOCIAL_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-coffee-bg flex items-center justify-center text-coffee-dark hover:bg-coffee-primary hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href={SOCIAL_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-coffee-bg flex items-center justify-center text-coffee-dark hover:bg-coffee-primary hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href={SOCIAL_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-coffee-bg flex items-center justify-center text-coffee-dark hover:bg-coffee-primary hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href={SOCIAL_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-coffee-bg flex items-center justify-center text-coffee-dark hover:bg-coffee-primary hover:text-white transition-colors">
                                <MessageCircle className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-coffee-dark mb-6">Tautan</h4>
                        <ul className="space-y-3 text-sm text-coffee-body">
                            <li><a href="#home" className="hover:text-coffee-primary transition-colors">Beranda</a></li>
                            <li><a href="#about" className="hover:text-coffee-primary transition-colors">Tentang Kami</a></li>
                            <li><a href="#menu" className="hover:text-coffee-primary transition-colors">Menu</a></li>
                            <li><a href="#location" className="hover:text-coffee-primary transition-colors">Lokasi</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-coffee-dark mb-6">Layanan</h4>
                        <ul className="space-y-3 text-sm text-coffee-body">
                            <li><a href="#" className="hover:text-coffee-primary transition-colors">Reservasi</a></li>
                            <li><a href="#" className="hover:text-coffee-primary transition-colors">Delivery</a></li>
                            <li><a href="#" className="hover:text-coffee-primary transition-colors">Katering</a></li>
                            <li><a href="#" className="hover:text-coffee-primary transition-colors">Merchandise</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-coffee-dark mb-6">Kontak</h4>
                        <ul className="space-y-4 text-sm text-coffee-body">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-coffee-primary shrink-0" />
                                <span>Jl. Sudirman No. 45,<br />Kota Padang</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-coffee-primary shrink-0" />
                                <span>+62 812 3456 7890</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-coffee-body">
                    <p>© 2026 KopiNongki.id — Nikmati setiap tetesnya.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-coffee-primary">Privacy Policy</a>
                        <a href="#" className="hover:text-coffee-primary">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
