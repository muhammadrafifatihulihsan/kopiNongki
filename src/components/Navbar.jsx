import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Menu', href: '#menu' },
        { name: 'Cerita', href: '#about' },
        { name: 'Lokasi', href: '#location' },
        { name: 'Kontak', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <Coffee className="text-coffee-primary group-hover:scale-110 transition-transform" />
                    <span className="text-xl font-bold text-coffee-dark tracking-tight">KopiNongki.id</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-coffee-body hover:text-coffee-primary font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-coffee-primary text-white px-5 py-2 rounded-full hover:bg-coffee-secondary transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        Pesan Sekarang
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-coffee-dark"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-card border-t border-white/20 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-coffee-dark font-medium py-2 border-b border-gray-100 last:border-0"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="bg-coffee-primary text-white w-full py-3 rounded-xl mt-2">
                                Pesan Sekarang
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
