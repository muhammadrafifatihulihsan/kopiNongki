import React from 'react';
import { Mail, ArrowRight, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactCta = () => {
    return (
        <section id="location" className="py-24 bg-[#FAF9F6] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[3rem] bg-[#1a1a1a] p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 group"
                >
                    {/* Futuristic Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] z-0"></div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D2691E]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#D2691E]/30 transition-colors duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8B4513]/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

                    {/* Content */}
                    <div className="relative z-10 max-w-lg">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[#D2691E] text-xs font-bold uppercase tracking-widest mb-6">
                            Now Open in Padang
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Experience the Future of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] to-[#FFB74D]">Coffee Culture</span>
                        </h2>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <MapPin className="text-white w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-lg">Kota Padang</div>
                                    <div className="text-gray-400">Jl. Sudirman No. 45</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <Clock className="text-white w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-lg">Daily Open</div>
                                    <div className="text-gray-400">08.00 - 22.00 WIB</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                Get Directions <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* New Map Visual container */}
                    <div className="relative z-10 w-full lg:w-1/2 h-80 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0f0f0f]">
                        <div className="absolute inset-0 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.07222880788!2d100.351478!3d-0.934579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b942e2b117bb%3A0xb841ce5f4332e6e!2sPadang%2C%20Padang%20City%2C%20West%20Sumatra!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="KopiNongki Padang"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-white text-sm font-medium">Open Now</span>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default ContactCta;
