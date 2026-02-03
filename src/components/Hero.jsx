import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, ArrowRight, Coffee } from 'lucide-react';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} id="home" className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-[#FAF9F6]">
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#D2691E]/10 to-[#8B4513]/5 blur-3xl"
                />
                <motion.div
                    animate={{
                        rotate: -360,
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#A1887F]/10 to-transparent blur-3xl"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div style={{ y, opacity }} className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#D2691E]/20 text-[#8B4513] text-sm font-medium mb-8 shadow-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#D2691E] animate-pulse"></span>
                        Specialty Coffee & Community Space
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-[#2C1810] mb-6 leading-[1.1] tracking-tight"
                    >
                        Seduh Cerita, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B4513] to-[#D2691E]">
                            Rayakan Momen.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg md:text-xl text-[#5D4037] mb-10 max-w-lg leading-relaxed"
                    >
                        Ruang temu modern untuk penikmat kopi urban. Nikmati  single-origin pilihan dalam suasana yang menginspirasi kreativitasmu.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button className="px-8 py-4 bg-[#2C1810] text-white rounded-2xl font-semibold hover:bg-[#8B4513] transition-all shadow-xl shadow-[#8B4513]/20 flex items-center justify-center gap-3 group">
                            Order Now
                            <div className="bg-white/20 p-1 rounded-full group-hover:bg-white/30 transition-colors">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </button>
                        <button className="px-8 py-4 bg-white text-[#2C1810] border border-[#2C1810]/10 rounded-2xl font-semibold hover:bg-[#FAF9F6] transition-all flex items-center justify-center gap-2 hover:border-[#2C1810]/30">
                            <MapPin className="w-5 h-5 opacity-60" />
                            Find Us
                        </button>
                    </motion.div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, duration: 1, type: "spring" }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-[#8B4513]/20 border-[8px] border-white max-w-md mx-auto rotate-3 hover:rotate-0 transition-transform duration-700">
                        <img
                            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                            alt="Latte Art KopiNongki"
                            className="w-full h-[600px] object-cover"
                        />

                        {/* Floating Card */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="absolute bottom-8 left-8 right-8 glass-card p-4 rounded-2xl border border-white/40 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-full bg-[#2C1810] flex items-center justify-center text-white">
                                <Coffee size={20} />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-[#2C1810]">Daily Roasts</div>
                                <div className="text-xs text-[#5D4037]">Fresh arabica beans</div>
                            </div>
                            <div className="ml-auto text-xl font-bold text-[#D2691E]">4.9★</div>
                        </motion.div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFB74D]/20 rounded-full blur-[100px] -z-10"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
